import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number-tag-line',
  imports: [],
  templateUrl: './number-tag-line.component.html',
  styleUrl: './number-tag-line.component.css'
})
export class NumberTagLineComponent {
  @Input({required:true}) number!:number;
  @Input({required:true}) tagline!:string;

}
