import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-title-icon',
  imports: [],
  templateUrl: './title-icon.component.html',
  styleUrl: './title-icon.component.css'
})
export class TitleIconComponent {
openModal() {
  this.showModal.set(true);
}
  @Input({required:true}) title!:string;
  @Input({required:true}) icon!:string;
  @Output() iconClick = new EventEmitter<boolean>();
  showModal = signal<boolean>(false);
  

  onIconClick() {
    this.openModal();
    this.iconClick.emit(true);
    console.log("Is this thing still on?")

  }

  

  onModalClose() {
    console.log('Modal closed!');
    this.showModal.set(false);
  }


}
