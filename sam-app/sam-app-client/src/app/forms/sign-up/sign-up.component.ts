import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  constructor(private auth: AuthService) {}
  @Output() signedUp = new EventEmitter<string>();

  async onSubmit(form: NgForm) {
    const { email, password, passwordConfirm } = form.value;

    if (password !== passwordConfirm) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const res = await this.auth.signUp(email, password);
      console.log("Sign up success:", res);
      this.signedUp.emit(email); // notify parent
    } catch (err) {
      console.error("Sign up error:", err);
    }
  }
}
