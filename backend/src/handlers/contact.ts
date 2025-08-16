import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import AWS from "aws-sdk";

const ses = new AWS.SES({ region: "af-south-1" });

const SENDER = "mzamo.sinomthaayakhanya@gmail.com";
const RECIPIENT = "mzamo.sinomthaayakhanya@gmail.com";

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
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

    if (event.httpMethod === "OPTIONS") {
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


    const body = JSON.parse(event.body);
    const { name, email, subject, message } = body;

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

    return {
        headers: {
            "Access-Control-Allow-Origin": "*", // ✅ CORS header
            "Access-Control-Allow-Headers": "*", // optional, useful if you're sending custom headers
            "Access-Control-Allow-Methods": "GET,POST,OPTIONS", // optional, helps with preflight
        },
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully!" }),
    };
  } catch (error: any) {
    return {
        headers: {
            "Access-Control-Allow-Origin": "*", // ✅ CORS header
            "Access-Control-Allow-Headers": "*", // optional, useful if you're sending custom headers
            "Access-Control-Allow-Methods": "GET,POST,OPTIONS", // optional, helps with preflight
        },
      statusCode: 500,
      body: JSON.stringify({ error: error.message || "Internal server error" }),
    };
  }
};
