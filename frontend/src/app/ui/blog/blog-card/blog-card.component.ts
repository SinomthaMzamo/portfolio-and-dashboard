import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BlogPost } from '../../../models/blog.model';

@Component({
  selector: 'app-blog-card',
  imports: [CommonModule],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css'
})
export class BlogCardComponent {
  @Input({required:true}) variant: 'title' | 'vertical-image' | 'horizontal-image' | 'full' = 'title';
  @Input({required:true}) blogData!:BlogPost;

  timeAgo(dateString: string | Date): string {
    let inputDate: string | Date;
    if(typeof dateString === "string"){
      inputDate = new Date(dateString);
    } else {
      inputDate = dateString;
    }
    
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
