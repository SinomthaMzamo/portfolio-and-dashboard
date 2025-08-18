import express from 'express';
import bodyParser from 'body-parser';
import { google } from 'googleapis';
import dotenv from 'dotenv';
import { sendEmail } from './email-server.ts';

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Load credentials from .env
const CLIENT_ID = process.env.CLIENT_ID!;
const CLIENT_SECRET = process.env.CLIENT_SECRET!;
const REDIRECT_URI = process.env.REDIRECT_URI!;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN!;

// OAuth2 client setup
export const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

// Set credentials with the refresh token
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// Endpoint to send email
app.post('/send-email', async (req, res) => {
  const { to, subject, text, inReplyTo, references } = req.body;

  if (!to || !subject || !text) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const response = await sendEmail(to, subject, text, inReplyTo, references);
    res.json({ success: true, messageId: response.id });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(4422, () => {
  console.log('Server running on http://localhost:4422');
});
