import { Component, forwardRef } from '@angular/core';
import { BaseField } from '../base-field';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-date-input',
  imports: [],
  templateUrl: './date-input.component.html',
  styleUrl: './date-input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true
    }
  ]
})
export class DateInputComponent extends BaseField{

}
