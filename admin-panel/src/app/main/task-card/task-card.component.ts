import { Component, Input } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { TitleIconComponent } from "../../components/title-icon/title-icon.component";
import { NumberTagLineComponent } from "../../components/number-tag-line/number-tag-line.component";

export type NumberTagline = {
  number:number;
  tagline:string;
};

export type TaskData = {
  numberTagLine: NumberTagline;
  title: "Experience" | "Education" | "Projects" | "Blogs" | "Education & Certifications";
  
}

@Component({
  selector: 'app-task-card',
  imports: [CardComponent, TitleIconComponent, NumberTagLineComponent],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
  @Input({required:true}) taskData!:TaskData;

}
