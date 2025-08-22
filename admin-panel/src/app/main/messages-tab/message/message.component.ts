import { Component, Input, signal } from '@angular/core';
import { MessagesData } from '../../../app.component';
import { FormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';
import { HttpClient } from '@angular/common/http';
import { LoadingScreenComponent } from "../../../shared/loading-screen/loading-screen.component";
import { CommonModule } from '@angular/common';
import { ExpandableTextComponent } from "../../../shared/expandable-text/expandable-text.component";

@Component({
  selector: 'app-message',
  imports: [FormsModule, TextFieldModule, LoadingScreenComponent, CommonModule, ExpandableTextComponent],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  @Input({required:true}) message!:MessagesData;
  constructor(private http: HttpClient) {}
  isLoading = signal(false);
  showLoadingScreen(){this.isLoading.set(true)};
  hideLoadingScreen(){this.isLoading.set(false)};

  onSubmit(form: any) {
    if (form.valid) {
      const body = {
        name: this.message.name,
        email: this.message.email,
        subject: this.message.subject,
        message: form.value.message,
        id: this.message.id,
      };
      console.log("this is the email request body", body);
      this.showLoadingScreen();

      const apiUrl = 'https://9o9p856081.execute-api.af-south-1.amazonaws.com/Prod/contact/reply';

      this.http.post<any>(apiUrl, body, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).subscribe({
        next: async (res) => {
          console.log("✅ Sending replyyyy", body, "/nThe response:", res.changes);
          window.location.reload();
          this.hideLoadingScreen();
        },
        error: (err) => alert('Error sending message: ' + err.message)
      });
    } else {
      alert('Please fill out all required fields.');
    }
  }

}
