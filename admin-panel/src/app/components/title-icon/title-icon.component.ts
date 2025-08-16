import { Component, Input, signal } from '@angular/core';
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: 'app-title-icon',
  imports: [ModalComponent],
  templateUrl: './title-icon.component.html',
  styleUrl: './title-icon.component.css'
})
export class TitleIconComponent {
openModal() {
  this.showModal.set(true);
}
  @Input({required:true}) title!:string;
  @Input({required:true}) icon!:string;
  showModal = signal<boolean>(false);

  onModalClose() {
    console.log('Modal closed!');
    this.showModal.set(false);
  }


}
