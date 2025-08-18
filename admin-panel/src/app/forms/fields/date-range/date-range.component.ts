import { Component, Input } from '@angular/core';
import { DateInputComponent } from "../date-input/date-input.component";
import { BaseField } from '../base-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-date-range',
  imports: [DateInputComponent, CommonModule],
  templateUrl: './date-range.component.html',
  styleUrl: './date-range.component.css'
})
export class DateRangeComponent {
  @Input() dateRange:BaseField[] = [
    {
      label: 'Start Date',
      id: 'project-start-date',
      name: 'project-start-date',
      type: 'date'
    },
    {
      label: 'End Date',
      id: 'project-end-date',
      name: 'project-end-date',
      type: 'date'
    }
  ];
}
