import { Component, Input, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { TitleIconComponent } from "../../components/title-icon/title-icon.component";
import { NumberTagLineComponent } from "../../components/number-tag-line/number-tag-line.component";
import { FormsModule } from '@angular/forms';
import { ModalComponent } from "../../components/modal/modal.component";
import { PolyFormComponent } from "../../forms/poly-form/poly-form.component";

export type NumberTagline = {
  number:number;
  tagline:string;
};

export type TaskData = {
  numberTagLine: NumberTagline;
  title: "Experience" | "Education" | "Projects" | "Blogs" | "Education & Certifications";
  formVariant?: 'project' | 'education' | 'experience' | 'blog';
  
}

@Component({
  selector: 'app-task-card',
  imports: [CardComponent, TitleIconComponent, NumberTagLineComponent, FormsModule, ModalComponent, PolyFormComponent],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
  @Input({required:true}) taskData!:TaskData;
  showModal = signal<boolean>(false);

  openModal(value: boolean) {
    this.showModal.set(value); // true if child emitted
  }

  closeModal() {
    this.showModal.set(false);
  }

  onSubmit(form:any){
    if(form.valid){
      // generate the data for request
      // send request to api endpoint
    }
  }
}
