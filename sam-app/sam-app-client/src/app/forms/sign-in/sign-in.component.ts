import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  imports: [FormsModule]
})
export class SignInComponent {

  constructor(
    private auth: AuthService,
    private api: ApiService
  ) {}

  async onSubmit(form: NgForm) {
    const { signInEmail, signInPassword } = form.value;

    try {
      const res = await this.auth.signIn(signInEmail, signInPassword);
      console.log('Login success:', res);

      const idToken = res.AuthenticationResult?.IdToken;
      console.log('IdToken:', idToken);

      if (idToken) {
        // Call your API with the token
        const apiRes = await this.api.callApi(idToken);
        console.log('API says:', apiRes);
      }

      alert('Login successful!');
    } catch (err) {
      console.error('Login error:', err);
      alert('Login failed. Check your credentials.');
    }
  }
}
