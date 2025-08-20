import { Component, Input } from '@angular/core';
import { ColumnComponent } from "../../components/column/column.component";
import { MessagesData } from '../../app.component';
import { TextFieldModule } from '@angular/cdk/text-field';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from "./message/message.component";


@Component({
  selector: 'app-messages-tab',
  imports: [FormsModule, ColumnComponent, TextFieldModule, MessageComponent],
  templateUrl: './messages-tab.component.html',
  styleUrl: './messages-tab.component.css'
})
export class MessagesTabComponent {
  @Input({required: true})messages:MessagesData[] = [
  ];
  constructor(private http: HttpClient) {}

  // Sort newest first
  get sortedMessages(): MessagesData[] {
    return this.messages
      .filter(msg => !msg.hasReplied) // ignore replied ones
      .sort((a, b) => {
        const tA = a.createdAt ? Date.parse(a.createdAt) : 0;
        const tB = b.createdAt ? Date.parse(b.createdAt) : 0;
        const aMs = Number.isNaN(tA) ? 0 : tA;
        const bMs = Number.isNaN(tB) ? 0 : tB;
        return bMs - aMs; // newest first
      }).slice(0, 4);
  }

  // Helper to format the Gmail timestamp for display
  formatDate(internalDate: string): string {
    return new Date(Number(internalDate)).toLocaleString();
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

      const apiUrl = 'https://9o9p856081.execute-api.af-south-1.amazonaws.com/Prod/contact/reply';

      this.http.post(apiUrl, body, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).subscribe({
        next: () => {
          console.log(body);
         
        },
        error: (err) => alert('Error sending message: ' + err.message)
      });
    } else {
      alert('Please fill out all required fields.');
    }
  }

}
