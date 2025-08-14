import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from "../../../shared/modal/modal.component";

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule, ModalComponent],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  // Define a writable signal with an initial value
data = signal<{ name: string; email: string; subject: string; message: string }>({
  name: '',
  email: '',
  subject: '',
  message: ''
});
  constructor(private http: HttpClient) {}

  showModal = signal<boolean>(false);

  onModalClose() {
    console.log('Modal closed!');
  }

  onSubmit(form: any) {
    if (form.valid) {
      const body = {
        name: form.value.name,
        email: form.value.email,
        subject: form.value.subject,
        message: form.value.message,
      };
      console.log("this is the email request body", body);

      const apiUrl = 'https://9o9p856081.execute-api.af-south-1.amazonaws.com/Prod/contact';

      this.http.post(apiUrl, body, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).subscribe({
        next: () => {
          console.log(body);
          this.data.set(body);
          this.showModal.set(true);
        },
        error: (err) => alert('Error sending message: ' + err.message)
      });
    } else {
      alert('Please fill out all required fields.');
    }
  }
}
