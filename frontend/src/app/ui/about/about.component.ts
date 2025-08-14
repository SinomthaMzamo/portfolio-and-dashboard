import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { HeadlinersComponent } from "./headliners/headliners.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { DtlComponent } from "./dtl/dtl.component";

@Component({
  selector: 'app-about',
  imports: [HeroComponent, HeadlinersComponent, TimelineComponent, DtlComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
