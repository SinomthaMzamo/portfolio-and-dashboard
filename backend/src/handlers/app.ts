import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { CopyObjectCommand, HeadObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getAllItems, Entry, batchPostRequestHandler, getRequestHandler, postRequestHandler, lastIndex } from './dynamoDBClient.ts';
import { TableName, Response } from './types.ts';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';





export type GetAllResponseBody = {
    message:string,
    data?:any[]
}

export const s3 = new S3Client({ region: process.env.AWS_REGION || "af-south-1" });
export const BUCKET_NAME = process.env.S3_BUCKET_NAME || "sinomtha-portfolio";



export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
        
    try {
        const method = event.httpMethod;
        const path = event.path;
        const requestBody = event.body ? JSON.parse(event.body) : {};
        let response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*", // ✅ CORS header
                "Access-Control-Allow-Headers": "*", // optional, useful if you're sending custom headers
                "Access-Control-Allow-Methods": "GET,POST,OPTIONS", // optional, helps with preflight
            },
            body: JSON.stringify({
                message: 'No work experience yet.'+path,
            })
        };
        
        if(method === "GET"){
            if(path.endsWith("/experiences")){
                // retrienve all work experience entries from dynamodb
                response = await getRequestHandler(path, TableName.EXPERIENCES, response as Response);
            } else if(path.endsWith("/education")){
                response = await getRequestHandler(path, TableName.EDUCATION, response as Response);
            } else if(path.endsWith("/projects")){
                response = await getRequestHandler(path, TableName.PROJECTS, response as Response);
            } else if(path.endsWith("/blogs")){
                response = await getRequestHandler(path, TableName.BLOGS, response as Response);
            } else if(path.endsWith('/core')){
                // get all data
                const allData: any = {}
                const tableNames = [TableName.EXPERIENCES, TableName.EDUCATION, TableName.PROJECTS, TableName.BLOGS];
                for(const tableName of tableNames){
                    allData[tableName.split("-")[lastIndex(tableName, "-")]] = await getAllItems(tableName)
                }
                const responseBody = {
                    message: "Core data retrieved successfully",
                    data: allData
                }
                response.body = JSON.stringify(responseBody);
            }
            
        } else if (method ==="POST"){
            if (path.endsWith("/batch")){
                const endpoint:string = path.split("/")[1];
                if(endpoint === "experiences"){
                    // add a new work experience entry to dynamodb table
                    response = await batchPostRequestHandler(path, TableName.EXPERIENCES, response as Response, requestBody as Entry[]);
                } else if(endpoint === "education"){
                    response = await batchPostRequestHandler(path, TableName.EDUCATION, response as Response, requestBody as Entry[]);
                } else if(endpoint === "projects"){
                    response = await batchPostRequestHandler(path, TableName.PROJECTS, response as Response, requestBody as Entry[]);
                } else if(endpoint === "blogs"){
                    response = await batchPostRequestHandler(path, TableName.BLOGS, response as Response, requestBody as Entry[]);
                }
            } else if (path.endsWith("/experiences") || path.endsWith("/education") || path.endsWith("/projects") || path.endsWith("/blogs") || path.endsWith("/avatar")){
                if(path.endsWith("/experiences")){
                    // add a new work experience entry to dynamodb table
                    response = await postRequestHandler(path, TableName.EXPERIENCES, response as Response, requestBody);
                } else if(path.endsWith("/education")){
                    response = await postRequestHandler(path, TableName.EDUCATION, response as Response, requestBody);
                } else if(path.endsWith("/projects")){
                    response = await postRequestHandler(path, TableName.PROJECTS, response as Response, requestBody);
                } else if(path.endsWith("/blogs")){
                    response = await postRequestHandler(path, TableName.BLOGS, response as Response, requestBody);
                } else if (path.endsWith("/avatar")){
                    response = await postRequestHandler(path, TableName.BLOGS, response as Response, requestBody);
                }
            }
        }

        return response;
    } catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin": "*", // ✅ CORS header
                "Access-Control-Allow-Headers": "*", // optional, useful if you're sending custom headers
                "Access-Control-Allow-Methods": "GET,POST,OPTIONS", // optional, helps with preflight
            },
            body: JSON.stringify({
                message: `some error happened: ${err}`,
            }),
        };
    }
};

