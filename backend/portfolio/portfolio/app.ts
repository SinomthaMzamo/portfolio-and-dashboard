import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { v4 as uuidv4 } from 'uuid';
import { createNewItem, getAllItems, batchWriteItems, Entry } from './dynamoDBClient';
import { Experience } from './types';

const EXPERIENCES_TABLE_NAME = "experiences";
const EDUCATION_TABLE_NAME = "education";
const PROJECTS_TABLE_NAME = "projects";
const BLOGS_TABLE_NAME = "blogs";

export type Response = {
    statusCode: number,
    headers: {
        "Access-Control-Allow-Origin": "*", // ✅ CORS header
        "Access-Control-Allow-Headers": "*", // optional, useful if you're sending custom headers
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS", // optional, helps with preflight
    },
    body: string
};

export type GetAllResponseBody = {
    message:string,
    data?:any[]
}


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
                message: 'No work experience yet.',
            })
        };
        
        if(method === "GET"){
            if(path.endsWith("experiences/")){
                // retrienve all work experience entries from dynamodb
                response = await getRequestHandler(path, EXPERIENCES_TABLE_NAME, response as Response);
            } else if(path.endsWith("education/")){
                response = await getRequestHandler(path, EDUCATION_TABLE_NAME, response as Response);
            } else if(path.endsWith("projects/")){
                response = await getRequestHandler(path, PROJECTS_TABLE_NAME, response as Response);
            } else if(path.endsWith("blogs/")){
                response = await getRequestHandler(path, BLOGS_TABLE_NAME, response as Response);
            } 
        } else if (method === "POST" && path.endsWith("experiences/") || path.endsWith("education/") || path.endsWith("projects/") || path.endsWith("blogs/")){
            if(path.endsWith("experiences/")){
                // add a new work experience entry to dynamodb table
                response = await postRequestHandler(path, EXPERIENCES_TABLE_NAME, response as Response, requestBody);
            } else if(path.endsWith("education/")){
                response = await postRequestHandler(path, EDUCATION_TABLE_NAME, response as Response, requestBody);
            } else if(path.endsWith("projects")){
                response = await postRequestHandler(path, PROJECTS_TABLE_NAME, response as Response, requestBody);
            } else if(path.endsWith("blogs/")){
                response = await postRequestHandler(path, BLOGS_TABLE_NAME, response as Response, requestBody);
            }
        } else if (method === "POST" && path === "/experiences/batch" || path.endsWith("/education/batch") || path.endsWith("/projects/batch") || path.endsWith("/blogs/batch")){
            const endpoint:string = path.split("/")[1]
            if(endpoint === "experiences"){
                // add a new work experience entry to dynamodb table
                response = await batchPostRequestHandler(path, EXPERIENCES_TABLE_NAME, response as Response, requestBody);
            } else if(endpoint === "education"){
                response = await batchPostRequestHandler(path, EDUCATION_TABLE_NAME, response as Response, requestBody);
            } else if(endpoint === "projects"){
                response = await batchPostRequestHandler(path, PROJECTS_TABLE_NAME, response as Response, requestBody);
            } else if(endpoint === "blogs"){
                response = await batchPostRequestHandler(path, BLOGS_TABLE_NAME, response as Response, requestBody);
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

export async function getRequestHandler(path:string, tableName:"experiences" | "education" | "projects" | "blogs", response:Response):Promise<Response>{
    const allRecords = await getAllItems(tableName)
    if (allRecords && allRecords.length > 0){
        const responseBody = {
            message: "Work experiences retrieved successfully",
            data: allRecords
        }
        response.body = JSON.stringify(responseBody);
    } return response
};

export async function postRequestHandler(path:string, tableName:"experiences" | "education" | "projects" | "blogs", response:Response, request:any):Promise<Response> {
    request.id = `${tableName.substring(0,3)}-${0}-${uuidv4().slice(0, 8)}`;
    await createNewItem(tableName, request)
    response.body = JSON.stringify({message:`New ${tableName.split('s')[0]} added successfully`});
    response.statusCode = 201;
    return response;
};
    
export async function batchPostRequestHandler(path:string, tableName: "experiences" | "education" | "projects" | "blogs", response:Response, request:any):Promise<Response> {
    if (Array.isArray(request)){
        (request).forEach((entry, index) => {
            entry.id = `${tableName.substring(0,3)}-${index}-${uuidv4().slice(0, 8)}`;
        });
        await batchWriteItems(tableName, request);
        response.body = JSON.stringify({message:`New ${tableName} batch added successfully`, data:request, });
        response.statusCode = 201;
    }return response;
}


