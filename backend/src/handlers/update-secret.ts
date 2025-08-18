import { SecretsManagerClient, PutSecretValueCommand } from "@aws-sdk/client-secrets-manager";
import dotenv from 'dotenv';

dotenv.config();

// Create a client
const client = new SecretsManagerClient({ region: process.env.AWS_REGION });
const CLIENT_ID = process.env.CLIENT_ID!;
const CLIENT_SECRET = process.env.CLIENT_SECRET!;
const REDIRECT_URI = process.env.REDIRECT_URI!;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN!;

async function updateSecret() {
  try {
    const command = new PutSecretValueCommand({
      SecretId: process.env.SECRET_ARN, // ARN or name of your secret
      SecretString: JSON.stringify({ CLIENT_ID: CLIENT_ID, CLIENT_SECRET:CLIENT_SECRET, REDIRECT_URI:REDIRECT_URI, REFRESH_TOKEN:REFRESH_TOKEN }), // New value
    });

    const response = await client.send(command);
    console.log("Secret updated successfully:", response);
  } catch (error) {
    console.error("Error updating secret:", error);
  }
}

updateSecret();
