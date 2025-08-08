import { Component, Input } from '@angular/core';
import { BlogPost } from '../../../models/blog.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({required:true}) blogPost!: BlogPost;

  timeAgo(dateInput: string | Date): string {
    const inputDate = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
    const now = new Date();
    const diffInMs = now.getTime() - inputDate.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  
    if (diffInDays < 14) {
      return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
    }
  
    const diffInWeeks = Math.floor(diffInDays / 7);
    if (diffInWeeks < 4) {
      return `${diffInWeeks} week${diffInWeeks !== 1 ? 's' : ''} ago`;
    }
  
    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) {
      return `${diffInMonths} month${diffInMonths !== 1 ? 's' : ''} ago`;
    }
  
    const diffInYears = Math.floor(diffInMonths / 12);
    return `${diffInYears} year${diffInYears !== 1 ? 's' : ''} ago`;
  }
  
  

}
