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
}
