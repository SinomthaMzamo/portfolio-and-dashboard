import { Component, Input } from '@angular/core';
import { BadgeComponent } from "../../../shared/badge/badge.component";
import { Education } from '../../../models/education.model';

@Component({
  selector: 'app-tile',
  imports: [BadgeComponent],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.css'
})
export class TileComponent {
  @Input({required:true}) education!: Education;
}
