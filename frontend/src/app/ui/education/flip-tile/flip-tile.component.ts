import { Component, Input } from '@angular/core';
import { Education } from '../../../models/education.model';
import { BadgeComponent } from "../../../shared/badge/badge.component";

@Component({
  selector: 'app-flip-tile',
  imports: [BadgeComponent],
  templateUrl: './flip-tile.component.html',
  styleUrl: './flip-tile.component.css'
})
export class FlipTileComponent {
  @Input({required:true}) education!: Education;
  flipped:boolean = false;
  formatDate(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
  }

  toggleFlip() {
    this.flipped = !this.flipped;
  }
}
