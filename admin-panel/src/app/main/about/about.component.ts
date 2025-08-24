import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { TitleIconComponent } from "../../components/title-icon/title-icon.component";
import { PolyFormComponent } from "../../forms/poly-form/poly-form.component";
import { ModalComponent } from "../../components/modal/modal.component";

@Component({
  selector: 'app-about',
  imports: [CardComponent, TitleIconComponent, PolyFormComponent, ModalComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  showModal = signal<boolean>(false);
  

  onIconClick() {
    this.openModal();
    console.log("Is this thing still on?", this.showModal())

  }

  openModal() {
    this.showModal.set(true); // open modal when icon clicked
  }

  closeModal() {
    this.showModal.set(false); // close modal
  }

  onSubmit(form:any){
    if(form.valid){
      // generate the data for request
      // send request to api endpoint
    }
  }

}
