import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FlipTileComponent } from "../../ui/education/flip-tile/flip-tile.component";
import { Education } from '../../models/education.model';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule, FlipTileComponent],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {
  // @Input() images: string[] = [];
  images:string[] = ["combat.png", "kmp.png", "equations.png", "big-corporate.png"]
  @Input({required: true})education!:Education[];
  @Input() autoPlay = true;
  @Input() autoPlayInterval = 3000; // ms
  @Input() showControls = true;

  index = 0;
  private intervalId: any;

  ngOnInit() {
    if (this.autoPlay && this.images.length > 1) {
      this.intervalId = setInterval(() => this.nextSlide(), this.autoPlayInterval);
    }
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  nextSlide() {
    this.index = (this.index + 1) % this.images.length;
  }

  prevSlide() {
    this.index = (this.index - 1 + this.images.length) % this.images.length;
  }

  goToSlide(i: number) {
    this.index = i;
  }
}
