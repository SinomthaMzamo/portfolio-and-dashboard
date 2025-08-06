import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { v4 as uuidv4 } from 'uuid';
import { createNewItem, getAllItems, batchWriteItems } from './dynamoDBClient';
import { Experience } from './types';

const EXPERIENCES_TABLE_NAME = "experiences";


export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    
    
    
    try {
        const method = event.httpMethod;
        const path = event.path;
        const requestBody = event.body ? JSON.parse(event.body) : {};
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*", // ✅ CORS header
                "Access-Control-Allow-Headers": "*", // optional, useful if you're sending custom headers
                "Access-Control-Allow-Methods": "GET,POST,OPTIONS", // optional, helps with preflight
            },
            body: JSON.stringify({
                message: 'No work experience yet.',
            })
        };
        let responseBody = {};
        if(method === "GET"){
            // retrienve all work experience entries from dynamodb
            const allWorkExperience = await getAllItems(EXPERIENCES_TABLE_NAME)
            if (allWorkExperience && allWorkExperience.length > 0){
                responseBody = {
                    message: "Work experiences retrieved successfully",
                    data: allWorkExperience
                }
                response.body = JSON.stringify(responseBody);
            }
        } else if (method === "POST" && path === "/experiences"){
            // add a new work experience entry to dynamodb table
            requestBody.id = "yeah";
            await createNewItem(EXPERIENCES_TABLE_NAME, requestBody)
            response.body = JSON.stringify({message:"New experience added successfully"});
            response.statusCode = 201;
        } else if (method === "POST" && path === "/experiences/batch"){
            if (Array.isArray(requestBody)){
                (requestBody as Experience & {id:string}[]).forEach((entry, index) => {
                    entry.id = `exp-${index}-${uuidv4().slice(0, 8)}`;
                });
                await batchWriteItems(EXPERIENCES_TABLE_NAME, requestBody);
                response.body = JSON.stringify({message:"New experiences added successfully", data:requestBody});
                response.statusCode = 201;
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



