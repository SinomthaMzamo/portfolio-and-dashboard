import { Component } from '@angular/core';
import { ColumnComponent } from "../../components/column/column.component";

export type Message = {
  name:string;
  subject:string;
  body:string;
  internalDate: string;
}

@Component({
  selector: 'app-messages-tab',
  imports: [ColumnComponent],
  templateUrl: './messages-tab.component.html',
  styleUrl: './messages-tab.component.css'
})
export class MessagesTabComponent {
  messages:Message[] = [
    {
      name: 'Summer',
      subject: 'This is a stellar effort',
      body: 'I really liked how the portfolio layout flows — clean and professional.',
      internalDate: (Date.now() - 1000 * 60 * 5).toString(),
    },
    {
      name: "Manqoba",
      subject: "Follow-up meeting",
      body: "Can we schedule a call tomorrow to discuss the next steps?",
      internalDate: (Date.now() - 1000 * 60 * 60 * 2).toString() // 2 hours ago
    },
    {
      name: "Karabo",
      subject: "Bug report",
      body: "I noticed that the contact form doesn’t validate emails correctly.",
      internalDate: (Date.now() - 1000 * 60 * 60 * 24).toString() // 1 day ago
    },
    {
      name: "Mongezi",
      subject: "Exciting collaboration",
      body: "I’d love to collaborate on a project. Let me know if you’re interested!",
      internalDate: (Date.now() - 1000 * 60 * 60 * 48).toString() // 2 days ago
    },
    {
      name: "Lyrichia",
      subject: "Job opportunity",
      body: "We’re impressed with your work — would you be open to a quick chat?",
      internalDate: (Date.now() - 1000 * 60 * 60 * 72).toString() // 3 days ago
    }
  ];
  // Sort newest first
  get sortedMessages(): Message[] {
    return [...this.messages].sort(
      (a, b) => Number(b.internalDate) - Number(a.internalDate)
    );
  }

  // Helper to format the Gmail timestamp for display
  formatDate(internalDate: string): string {
    return new Date(Number(internalDate)).toLocaleString();
  }

}
