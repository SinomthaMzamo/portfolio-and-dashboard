import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-column',
  imports: [],
  templateUrl: './column.component.html',
  styleUrl: './column.component.css'
})
export class ColumnComponent {
  @Input({required:true}) title!:string;
}
