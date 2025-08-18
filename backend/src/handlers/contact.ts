import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import AWS from "aws-sdk";
// google api
import { google } from "googleapis";
import dotenv from "dotenv";
import { getRequestHandler, postRequestHandler } from "./app.ts";
import { Response, TableName } from "./types.ts";
import { GetSecretValueCommand, SecretsManagerClient } from "@aws-sdk/client-secrets-manager";

dotenv.config();


const ses = new AWS.SES({ region: process.env.AWS_REGION });
const SENDER = "mzamo.sinomthaayakhanya@gmail.com";
const RECIPIENT = "mzamo.sinomthaayakhanya@gmail.com";

const client = new SecretsManagerClient({ region: process.env.AWS_REGION });
const command = new GetSecretValueCommand({ SecretId: process.env.SECRET_ARN });


export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  
  try {
    
    const method = event.httpMethod;
    const path = event.path;

    

    if (method === "OPTIONS") {
        return {
            statusCode: 200,
            headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
            },
            body: "",
        };
    }
    

    if(method === "GET"){
      if (event.path === "/contact"){
        let response: Response =  {
          statusCode: 200,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
          },
          body: JSON.stringify({ message: "Fetching messages...", success: true }),
        };
        // get all items in messages table
        return await getRequestHandler(path, TableName.MESSAGES, response as Response);
      }
    }

    if (!event.body) {
      return {
        headers: {
            "Access-Control-Allow-Origin": "*", // ✅ CORS header
            "Access-Control-Allow-Headers": "*", // optional, useful if you're sending custom headers
            "Access-Control-Allow-Methods": "GET,POST,OPTIONS", // optional, helps with preflight
        },
        statusCode: 400,
        body: JSON.stringify({ error: "Request body is missing" }),
      };
    }

    const body = JSON.parse(event.body);
    const { name, email, subject, message } = body;

    

    if(method === "POST"){
      if (event.path === "/contact/reply") {
        if (!email || !subject || !message) {
          return {
            headers: {
                "Access-Control-Allow-Origin": "*", // ✅ CORS header
                "Access-Control-Allow-Headers": "*", // optional, useful if you're sending custom headers
                "Access-Control-Allow-Methods": "GET,POST,OPTIONS", // optional, helps with preflight
            },
            statusCode: 400,
            body: JSON.stringify({ error: "email address, subject and message are required" }),
          };
        }
        const secretClientResponse = await client.send(command);
        const secret = JSON.parse(secretClientResponse.SecretString as string);

        const oAuth2Client = new google.auth.OAuth2(
          secret.CLIENT_ID,
          secret.CLIENT_SECRET,
          secret.REDIRECT_URI,
          
        );
        oAuth2Client.setCredentials({ refresh_token: secret.REFRESH_TOKEN });
        const gmail = google.gmail({ version: "v1", auth: oAuth2Client });
        // ensure the token is valid
        await oAuth2Client.getAccessToken();
        // TODO: check if email exists in database before processing reply!


        
        // Prepare email
        const messageParts = [
          `To: ${email}`,
          "Content-Type: text/plain; charset=utf-8",
          `Subject: RE: ${subject}`,
          "",
          message,
        ];
  
        const encodedMessage = Buffer.from(messageParts.join("\n"))
          .toString("base64")
          .replace(/\+/g, "-")
          .replace(/\//g, "_")
          .replace(/=+$/, "");
        // send email via gmail API
        const response = await gmail.users.messages.send({
          userId: "me",
          requestBody: { raw: encodedMessage },
        });
  
        return {
          statusCode: 200,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({ success: true, messageId: response.data.id }),
        };
      }else {
        if (!name || !email || !subject || !message) {
          return {
            headers: {
                "Access-Control-Allow-Origin": "*", // ✅ CORS header
                "Access-Control-Allow-Headers": "*", // optional, useful if you're sending custom headers
                "Access-Control-Allow-Methods": "GET,POST,OPTIONS", // optional, helps with preflight
            },
            statusCode: 400,
            body: JSON.stringify({ error: "name, email, subject and message are required" }),
          };
        }
        const emailParams = {
          Source: SENDER,
          Destination: { ToAddresses: [RECIPIENT] },
          Message: {
            Subject: { Data: "New Message from Your Portfolio Website" },
            Body: {
              Text: {
                Data: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
              },
            },
          },
        };
  
        await ses.sendEmail(emailParams).promise();
        const response = {
          headers: {
              "Access-Control-Allow-Origin": "*", // ✅ CORS header
              "Access-Control-Allow-Headers": "*", // optional, useful if you're sending custom headers
              "Access-Control-Allow-Methods": "GET,POST,OPTIONS", // optional, helps with preflight
          },
        statusCode: 200,
        body: JSON.stringify({ message: "Message sent successfully!" }),
        };
        // Save to DB logic here (optional)
        await postRequestHandler("/contact", TableName.MESSAGES, response as Response,body)
        return response;
      }
    }
    return {
      headers: {
          "Access-Control-Allow-Origin": "*", // ✅ CORS header
          "Access-Control-Allow-Headers": "*", // optional, useful if you're sending custom headers
          "Access-Control-Allow-Methods": "GET,POST,OPTIONS", // optional, helps with preflight
      },
      statusCode: 400,
      body: JSON.stringify({ error: "unsupported enpoint: ", path }),
    };
  } catch (error: any) {
    return {
        headers: {
            "Access-Control-Allow-Origin": "*", // ✅ CORS header
            "Access-Control-Allow-Headers": "*", // optional, useful if you're sending custom headers
            "Access-Control-Allow-Methods": "GET,POST,OPTIONS", // optional, helps with preflight
        },
      statusCode: 500,
      body: JSON.stringify({ error: error.message +event.httpMethod || "Internal server error"+event.httpMethod }),
    };
  }
};


