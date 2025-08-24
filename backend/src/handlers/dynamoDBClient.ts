import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { BatchWriteCommand, DynamoDBDocumentClient, PutCommand, ScanCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { BlogPost, Education, ExperienceEntry, Project, TableName, Response } from "./types.ts";
import { CopyObjectCommand, HeadObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { v4 as uuidv4 } from 'uuid';
import { BUCKET_NAME, s3 } from "./app.ts";


const client = new DynamoDBClient({}); // Uses Lambda's IAM role permissions
const repository = DynamoDBDocumentClient.from(client);

export type Entry = (BlogPost | ExperienceEntry | Project | Education) & {
    id?:string,
    createdAt?:string
};

export async function getAllItems(tableName: string) {
    try {
      const result = await repository.send(
        new ScanCommand({
          TableName: tableName,
        })
      );
      return result.Items; // All retrieved items
    } catch (error) {
      console.error("Failed to scan table:", error);
      throw error;
    }
};

export async function createNewItem(tableName: string, data:Entry) {
    try {
      await repository.send(
        new PutCommand({
          TableName: tableName,
          Item: data,
          ConditionExpression: 'attribute_not_exists(id)'
        })
      );
    } catch (error) {
      console.error("Failed to scan table:", error);
      throw error;
    }
};

export async function batchWriteItems(tableName: string, items: Entry[]) {
    // DynamoDB batch write allows max 25 items per batch
    const BATCH_SIZE = 25;
    console.log("Batching these items:", JSON.stringify(items, null, 2));
    for (let i = 0; i < items.length; i += BATCH_SIZE) {
      const batch = items.slice(i, i + BATCH_SIZE);
      
      const putRequests = batch.map(item => ({
        PutRequest: { Item: item }
      }));
  
      const params = {
        RequestItems: {
          [tableName]: putRequests,
        },
      };
      
      const command = new BatchWriteCommand(params);
      const response = await repository.send(command);
  
      if (response.UnprocessedItems && Object.keys(response.UnprocessedItems).length > 0) {
        // Handle unprocessed items (retry logic)
        console.warn("Unprocessed items detected:", response.UnprocessedItems);
      }
    }
}

export async function getRequestHandler(path:string, tableName:TableName, response:Response):Promise<Response>{
  const allRecords = await getAllItems(tableName)
  if (allRecords && allRecords.length > 0){
      const responseBody = {
          message: "Work experiences retrieved successfully",
          data: allRecords
      }
      response.body = JSON.stringify(responseBody);
  } return response
};

export const lastIndex = (stringToSplit: string, splitChar:string):number => {
  return stringToSplit.split(splitChar).length - 1;
}

export async function postRequestHandler(path:string, tableName:TableName, response:Response, request:any):Promise<Response> {
  request.id = `${tableName.split("-")[lastIndex(tableName, "-")].substring(0,3)}-${0}-${uuidv4().slice(0, 8)}`;
  
  // Check if request has file info
  if (request.fileName && request.fileType) {
    if(path.endsWith("/avatar")){
      const BASE_KEY = "Sinomtha_Mzamo_Picture.png";
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const timestampedKey = `Sinomtha_Mzamo_Picture_${timestamp}.png`;
      // copy the file to time-stamped
      try {
        // Check if base file exists
        await s3.send(new HeadObjectCommand({ Bucket: BUCKET_NAME, Key: BASE_KEY }));
        // upload new replacement
        await s3.send(new CopyObjectCommand({
          Bucket: BUCKET_NAME,
          CopySource: `${BUCKET_NAME}/${BASE_KEY}`,
          Key: timestampedKey
          }));
      } catch (err:any) {
          if (err.name !== 'NotFound') {
            response.body = JSON.stringify({error: "we dead, /avatar error hit!\n"+err, uploadUrl:"placeholder.com"});
            response.statusCode = 200
            // return response;
          }
          // No previous file exists, skip copy
      }
      // Generate signed URL for uploading the latest version
      const uploadCommand = new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: BASE_KEY,
      });

      const uploadUrl = await getSignedUrl(s3, uploadCommand, { expiresIn: 3600 });

      response.body = JSON.stringify({message: "image uploaded to: "+`https://${BUCKET_NAME}.s3.af-south-1.amazonaws.com/${BASE_KEY}`, uploadUrl:uploadUrl});
      response.statusCode = 200;
      return response;
      // confirm url is unchanged
    } else{
      // generate unique key
      const s3Key = `uploads/${request.id}-${request.fileName}`;

      // Generate pre-signed URL
      const command = new PutObjectCommand({
          Bucket: BUCKET_NAME,
          Key: s3Key,
          ContentType: request.fileType,
      });

      const uploadUrl = await getSignedUrl(s3, command, { expiresIn: 3600 });

      // Store S3 URL in DynamoDB item
      request.imgSrc = `https://${BUCKET_NAME}.s3.af-south-1.amazonaws.com/${s3Key}`;

      // Optionally remove fileName/type from DB
      delete request.fileName;
      delete request.fileType;

      // Respond with the pre-signed URL for frontend to upload
      response.body = JSON.stringify({
          message: `New ${tableName} entry added successfully`,
          uploadUrl,
          item: request
      });
    } 
  } else {
      // Normal DB-only case
      response.body = JSON.stringify({ message: `New ${tableName} entry added successfully`, item: request });
  } 
  request.createdAt = new Date().toISOString();
  await createNewItem(tableName, request)
  response.statusCode = 201;
  return response;
};
  
export async function batchPostRequestHandler(path:string, tableName:TableName, response:Response, request:Entry[]):Promise<Response> {
  // response.body = JSON.stringify({data: request});
  // return response;
  if (Array.isArray(request)){
      (request).forEach((entry, index) => {
          entry.id = `${tableName.split("-")[lastIndex(tableName, "-")].substring(0,3)}-${index}-${uuidv4().slice(0, 8)}`;
          entry.createdAt = new Date().toISOString();
      });
      await batchWriteItems(tableName, request);
      response.body = JSON.stringify({message:`New ${tableName} batch added successfully`, data:request, });
      response.statusCode = 201;
  }return response;
}

export async function updateBooleanField(
  id: string,
  fieldName: string,
  value: boolean
) {
  const command = new UpdateCommand({
    TableName: TableName.MESSAGES,
    Key: { id }, // assumes "id" is your partition key
    UpdateExpression: `SET #field = :val`,
    ExpressionAttributeNames: {
      "#field": fieldName,
    },
    ExpressionAttributeValues: {
      ":val": value,
    },
    ReturnValues: "ALL_NEW", // returns the updated item
  });

  const response = await client.send(command);
  return response.Attributes;
}



  
  


export { repository };
