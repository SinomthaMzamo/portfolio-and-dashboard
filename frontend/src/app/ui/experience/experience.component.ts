import { Component } from '@angular/core';
import { TabsComponent } from "./tabs/tabs.component";
import { PillsComponent } from "./pills/pills.component";

@Component({
  selector: 'app-experience',
  imports: [TabsComponent, PillsComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

}
