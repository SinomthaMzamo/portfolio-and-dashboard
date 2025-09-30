import { Component, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-confirm-sign-up',
  imports: [FormsModule],
  templateUrl: './confirm-sign-up.component.html',
  styleUrl: './confirm-sign-up.component.css'
})
export class ConfirmSignUpComponent {

  @Input({ required: true }) username!: string;

  constructor(private auth: AuthService) {}

  async onSubmit(form: NgForm) {
    const { code } = form.value;

    try {
      const res = await this.auth.confirmSignUp(this.username, code);
      console.log("Sign up confirmed:", res);
      alert('Sign up confirmed! You can now log in.');
    } catch (err) {
      console.error("Confirmation error:", err);
      alert('Error confirming sign up. Please check your code and try again.');
    }
  }
}
