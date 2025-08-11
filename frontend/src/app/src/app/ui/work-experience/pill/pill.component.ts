import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pill',
  imports: [],
  templateUrl: './pill.component.html',
  styleUrl: './pill.component.css'
})
export class PillComponent {
  @Input({required:true}) text!:string;
}
