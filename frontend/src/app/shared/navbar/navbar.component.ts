import { Component } from '@angular/core';
import { ItemComponent } from "./item/item.component";

@Component({
  selector: 'app-navbar',
  imports: [ItemComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  downloadCV() {
    window.open('https://sinomtha-portfolio.s3.af-south-1.amazonaws.com/Sinomtha_Mzamo_CV.pdf', '_blank');
  }

  onItemClicked() {
    if (window.innerWidth <= 1270) { // adjust breakpoint as needed
      this.toggleMenu();
    }
  }

}
