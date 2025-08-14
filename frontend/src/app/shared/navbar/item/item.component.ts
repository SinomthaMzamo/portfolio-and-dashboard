import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input({required:true}) sectionID!:string;
  @Output() itemClicked = new EventEmitter<void>();

  handleClick() {
    this.itemClicked.emit(); // notify parent
  }
}
