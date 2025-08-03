import { Component } from '@angular/core';
import { ItemComponent } from "./item/item.component";

@Component({
  selector: 'app-navbar',
  imports: [ItemComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
