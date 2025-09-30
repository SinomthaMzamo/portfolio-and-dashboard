import { Component } from '@angular/core';
import { SignUpComponent } from "./forms/sign-up/sign-up.component";
import { ConfirmSignUpComponent } from "./forms/confirm-sign-up/confirm-sign-up.component";
import { CommonModule } from '@angular/common';
import { SignInComponent } from "./forms/sign-in/sign-in.component";

@Component({
  selector: 'app-root',
  imports: [SignUpComponent, ConfirmSignUpComponent, CommonModule, SignInComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sam-app-client';
  username?: string;

  onSignedUp(username: string) {
    this.username = username;
  }

}
