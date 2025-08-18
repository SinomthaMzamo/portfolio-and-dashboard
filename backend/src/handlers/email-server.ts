import express from 'express';
import bodyParser from 'body-parser';
import { google } from 'googleapis';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(bodyParser.json());

const CLIENT_ID = process.env.CLIENT_ID!;
const CLIENT_SECRET = process.env.CLIENT_SECRET!;
const REDIRECT_URI = process.env.REDIRECT_URI!;
const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

// 🚀 Route to generate Google OAuth consent URL
app.get('/auth', (req, res) => {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline', // so you get a refresh token
    scope: ['https://www.googleapis.com/auth/gmail.send'],
  });

  console.log('Open this URL in your browser to authenticate:');
  console.log(authUrl);

  res.send(`<p>Open this URL in your browser to authenticate:</p><a href="${authUrl}" target="_blank">${authUrl}</a>`);
});

// 1️⃣ OAuth2 callback endpoint to exchange code for tokens
app.get('/oauth2callback', async (req, res) => {
  const code = req.query.code as string;

  if (!code) {
    return res.status(400).send('No code received');
  }

  try {
    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);

    console.log('== TOKENS ==');
    console.log(tokens);

    if (tokens.refresh_token) {
      console.log('\n✅ Your REFRESH_TOKEN is:');
      console.log(tokens.refresh_token);
      console.log('\n👉 Save it in your .env as REFRESH_TOKEN=' + tokens.refresh_token);
    }

    res.send('Authentication successful! You can close this tab.');
  } catch (err) {
    console.error('Error exchanging code:', err);
    res.status(500).send('Failed to authenticate');
  }
});

// 📧 Send email route
app.post('/send-email', async (req, res) => {
  const { email, subject, message } = req.body;

  if (!email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields', data: req.body });
  }

  try {
    const response = await sendEmail(email, subject, message);
    res.json({ success: true, messageId: response.id });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Start server
app.listen(6969, () => {
    console.log('Server running on http://localhost:6969');
    console.log('Visit http://localhost:6969/auth to generate your Google OAuth URL.');
  });

  export async function sendEmail(to: string, subject: string, text: string, inReplyTo?: string, references?: string) {
    const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });
  
    const messageParts = [
      `To: ${to}`,
      'Content-Type: text/plain; charset=utf-8',
      `Subject: ${subject}`,
      ...(inReplyTo ? [`In-Reply-To: ${inReplyTo}`] : []),
      ...(references ? [`References: ${references}`] : []),
      '',
      text
    ];
  
    const encodedMessage = Buffer.from(messageParts.join('\n'))
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  
    const res = await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedMessage,
      },
    });
  
    return res.data;
  }
  