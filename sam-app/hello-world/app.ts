import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const lambdaHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  console.log("Event:", event);

  // OPTIONS (preflight)
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:4200",
        "Access-Control-Allow-Methods": "OPTIONS,GET,POST",
        "Access-Control-Allow-Headers": "Authorization,Content-Type"
      },
      body: ""
    };
  }

  // GET / POST
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:4200"
    },
    body: JSON.stringify({ message: "Hello from Lambda!" })
  };
};
