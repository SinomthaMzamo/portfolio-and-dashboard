import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from "../../../shared/modal/modal.component";
import { LoadingScreenComponent } from "../../../shared/loading-screen/loading-screen.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule, ModalComponent, LoadingScreenComponent, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
isLoading = signal<boolean>(false);  
  // Define a writable signal with an initial value
data = signal<{ name: string; email: string; subject: string; message: string }>({
  name: '',
  email: '',
  subject: '',
  message: ''
});
  constructor(private http: HttpClient) {}

  showModal = signal<boolean>(false);
  showLoadingScreen(){this.isLoading.set(true)};
  hideLoadingScreen(){this.isLoading.set(false)};

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
      this.showLoadingScreen();
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
          
          setTimeout(() => {
            this.hideLoadingScreen();
            this.showModal.set(true);
          }, 3000);
          
        },
        error: (err) => alert('Error sending message: ' + err.message)
      });
    } else {
      alert('Please fill out all required fields.');
    }
  }
}
