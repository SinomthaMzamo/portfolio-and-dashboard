import { APIGatewayProxyHandler } from "aws-lambda";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  GetCommand,
  ScanCommand,
  PutCommand,
  DeleteCommand,
} from "@aws-sdk/lib-dynamodb";
import { v4 as uuidv4 } from "uuid";

const USERS_TABLE = process.env.USERS_TABLE!;
const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

export const handler: APIGatewayProxyHandler = async (event) => {
  const routeKey = `${event.httpMethod} ${event.resource}`;
  let responseBody: any = { Message: "Unsupported route" };
  let statusCode = 400;

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  try {
    // Get all users
    if (routeKey === "GET /users") {
      const ddbResponse = await ddbDocClient.send(new ScanCommand({
        TableName: USERS_TABLE,
      }));
      responseBody = ddbResponse.Items || [];
      statusCode = 200;
    }

    // Get user by ID
    else if (routeKey === "GET /users/{userid}") {
      const ddbResponse = await ddbDocClient.send(new GetCommand({
        TableName: USERS_TABLE,
        Key: { userid: event.pathParameters?.userid },
      }));
      responseBody = ddbResponse.Item || {};
      statusCode = 200;
    }

    // Delete user by ID
    else if (routeKey === "DELETE /users/{userid}") {
      await ddbDocClient.send(new DeleteCommand({
        TableName: USERS_TABLE,
        Key: { userid: event.pathParameters?.userid },
      }));
      responseBody = {};
      statusCode = 200;
    }

    // Create user
    else if (routeKey === "POST /users") {
      const requestJson = JSON.parse(event.body || "{}");
      requestJson.timestamp = new Date().toISOString();
      requestJson.userid = requestJson.userid || uuidv4();

      await ddbDocClient.send(new PutCommand({
        TableName: USERS_TABLE,
        Item: requestJson,
      }));
      responseBody = requestJson;
      statusCode = 200;
    }

    // Update user by ID
    else if (routeKey === "PUT /users/{userid}") {
      const requestJson = JSON.parse(event.body || "{}");
      requestJson.timestamp = new Date().toISOString();
      requestJson.userid = event.pathParameters?.userid;

      await ddbDocClient.send(new PutCommand({
        TableName: USERS_TABLE,
        Item: requestJson,
      }));
      responseBody = requestJson;
      statusCode = 200;
    }
  } catch (err: any) {
    statusCode = 400;
    responseBody = { Error: err.message || String(err) };
    console.error(err);
  }

  return {
    statusCode,
    body: JSON.stringify(responseBody),
    headers,
  };
};
