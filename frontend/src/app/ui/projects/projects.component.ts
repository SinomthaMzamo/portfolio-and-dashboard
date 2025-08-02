import { Component } from '@angular/core';
import { CardsComponent } from "./cards/cards.component";

@Component({
  selector: 'app-projects',
  imports: [CardsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
