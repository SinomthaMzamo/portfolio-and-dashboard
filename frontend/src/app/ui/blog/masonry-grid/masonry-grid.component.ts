import { Component, HostListener, Input } from '@angular/core';
import { BlogPost } from '../../../models/blog.model';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from "../blog-card/blog-card.component";

export enum BlogCardVariants {
   TITLE = "title",
   VERTICAL = "vertical-image",
   HORIZONTAL = "horizontal-image",
   FULL = "full"
};

@Component({
  selector: 'app-masonry-grid',
  imports: [CommonModule, BlogCardComponent],
  templateUrl: './masonry-grid.component.html',
  styleUrl: './masonry-grid.component.css'
})
export class MasonryGridComponent {
  @Input({required:true}) blogPosts!:BlogPost[];
  // define the masonry default layout as an array
  defaultLayout: BlogCardVariants[] = [
    BlogCardVariants.TITLE, BlogCardVariants.HORIZONTAL,
    BlogCardVariants.FULL, BlogCardVariants.VERTICAL,
    BlogCardVariants.TITLE, BlogCardVariants.HORIZONTAL,
  ];

  layout: BlogCardVariants[] = [...this.defaultLayout];

  ngOnInit() {
    this.updateLayout(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateLayout(event.target.innerWidth);
  }

  private updateLayout(width: number) {
    if (width < 1016) {
      this.layout = Array(this.blogPosts.length).fill(BlogCardVariants.TITLE);
    } else {
      this.layout = [...this.defaultLayout];
    }
  }

}
