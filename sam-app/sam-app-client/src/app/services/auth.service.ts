import { Injectable } from '@angular/core';
import { CognitoIdentityProviderClient, SignUpCommand, ConfirmSignUpCommand, InitiateAuthCommand } from "@aws-sdk/client-cognito-identity-provider";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private region = "af-south-1";
  private clientId = "74bfcq3j0sroghs1um387sok4o";
  private client = new CognitoIdentityProviderClient({ region: this.region });

  constructor() {}

  async signUp(username: string, password: string) {
    const command = new SignUpCommand({
      ClientId: this.clientId,
      Username: username,
      Password: password,
      UserAttributes: [
        { Name: "email", Value: username }
      ]
    });

    const response = await this.client.send(command);
    return response;
  }

  async confirmSignUp(username: string, code: string) {
    const command = new ConfirmSignUpCommand({
      ClientId: this.clientId,
      Username: username,
      ConfirmationCode: code
    });

    const response = await this.client.send(command);
    return response;
  }

  async signIn(username: string, password: string) {
    const command = new InitiateAuthCommand({
      AuthFlow: "USER_PASSWORD_AUTH",
      ClientId: this.clientId,
      AuthParameters: {
        USERNAME: username,
        PASSWORD: password
      }
    });

    const response = await this.client.send(command);
    return response; // contains IdToken, AccessToken, RefreshToken
  }
}
