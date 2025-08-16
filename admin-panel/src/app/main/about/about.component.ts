import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { TitleIconComponent } from "../../components/title-icon/title-icon.component";

@Component({
  selector: 'app-about',
  imports: [CardComponent, TitleIconComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
