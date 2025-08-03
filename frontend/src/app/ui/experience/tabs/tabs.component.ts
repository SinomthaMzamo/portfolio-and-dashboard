import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  @Input({required:true}) category!:string;
  @Input() class: string = '';

}
