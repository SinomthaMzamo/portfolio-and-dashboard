import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { BatchWriteCommand, DynamoDBDocumentClient, PutCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";
import { BlogPost, Education, ExperienceEntry, Project } from "./types";

const client = new DynamoDBClient({}); // Uses Lambda's IAM role permissions
const repository = DynamoDBDocumentClient.from(client);

export type Entry = (BlogPost | ExperienceEntry | Project | Education) & {
    id?:string,
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
  


export { repository };
