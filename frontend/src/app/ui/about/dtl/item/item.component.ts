import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'li[app-item]',
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements AfterViewInit {
  @Input({required:true}) year!: string;
  @Input({required:true}) text!: string;
  @Input({required:true}) title!: string;
  @Output() inView = new EventEmitter<void>();

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    this.checkInView();
  }

  checkInView() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const inViewport =
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    if (inViewport) {
      this.el.nativeElement.classList.add('in-view'); // adds to <li>
      this.inView.emit();
    }
  }
}