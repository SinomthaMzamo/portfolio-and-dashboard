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

}
