import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expandable-text',
  imports: [CommonModule],
  templateUrl: './expandable-text.component.html',
  styleUrl: './expandable-text.component.css'
})
export class ExpandableTextComponent {
  @Input() text: string = '';
  @Input() maxLength: number = 100; // default truncation length
  expanded: boolean = false;

  get displayText(): string {
    if (this.expanded || this.text.length <= this.maxLength) {
      return this.text;
    }
    return this.text.substring(0, this.maxLength) + '...';
  }

  toggleExpand(): void {
    this.expanded = !this.expanded;
  }
}
