import { Component, Input } from '@angular/core';
import { BadgeComponent } from "../../../shared/badge/badge.component";
import { Project } from '../../../models/project.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  imports: [CommonModule, BadgeComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input({required:true}) projectInfo!:Project;
  flipped:boolean = false;
  @Input() maxLength: number = 120; // default truncation length
  expanded: boolean = false;

  get displayText(): string {
    if (this.expanded || this.projectInfo.description.length <= this.maxLength) {
      return this.projectInfo.description;
    }
    return this.projectInfo.description.substring(0, this.maxLength) + '...';
  }

  toggleExpand(): void {
    this.expanded = !this.expanded;
  }

  // Helper to format the timestamp for display
  formatDate(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
  }

  toggleFlip() {
    this.flipped = !this.flipped;
  }

  getFirstSentence(): string {
    if (!this.projectInfo?.description) return '';
    const desc = this.projectInfo.description;
    const firstSentence = desc.split(/[.!]/)[0]; // split on . or !
    return firstSentence;
  }
}
