import { Component } from '@angular/core';
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-blog',
  imports: [CardComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
