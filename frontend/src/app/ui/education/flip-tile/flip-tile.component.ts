import { Component, Input } from '@angular/core';
import { Education } from '../../../models/education.model';
import { BadgeComponent } from "../../../shared/badge/badge.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flip-tile',
  imports: [BadgeComponent, CommonModule],
  templateUrl: './flip-tile.component.html',
  styleUrl: './flip-tile.component.css'
})
export class FlipTileComponent {
  @Input({required:true}) education!: Education;
  flipped:boolean = false;
  @Input() maxLength: number = 120; // default truncation length
  expanded: boolean = false;

  get displayText(): string {
    if (this.expanded || this.education.description!.length <= this.maxLength) {
      return this.education!.description;
    }
    return this.education.description.substring(0, this.maxLength) + '...';
  }

  toggleExpand(): void {
    this.expanded = !this.expanded;
  }


  formatDate(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
  }

  toggleFlip() {
    this.flipped = !this.flipped;
    console.log("Showing back face:", this.flipped);
  }
}
