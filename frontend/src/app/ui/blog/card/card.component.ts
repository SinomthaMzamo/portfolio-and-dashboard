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

}
