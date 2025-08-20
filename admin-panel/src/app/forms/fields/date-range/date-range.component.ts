import { Component, forwardRef, Input } from '@angular/core';
import { DateInputComponent } from "../date-input/date-input.component";
import { BaseField } from '../base-field';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormControl, FormGroup, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-date-range',
  imports: [DateInputComponent, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './date-range.component.html',
  styleUrl: './date-range.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateRangeComponent),
      multi: true
    }
  ]
})
export class DateRangeComponent implements ControlValueAccessor {
  groupDate = new FormGroup({
    startDate: new FormControl(''),
    endDate: new FormControl(''),
  });

  @Input() dateRange: { label: string; name: string; id: string; value: string; type: string; formControlName: string }[] = [
    { label: 'Start Date', id: 'project-start-date', name: 'project-start-date', type: 'date', value: '', formControlName: 'startDate' },
    { label: 'End Date', id: 'project-end-date', name: 'project-end-date', type: 'date', value: '', formControlName: 'endDate' }
  ];

  onChange: any = () => {};
  onTouched: any = () => {};

  // Called by Angular to write a value to the form
  writeValue(value: any): void {
    if (value) {
      this.groupDate.setValue(value, { emitEvent: false });
    }
  }

  // Called by Angular to register a change callback
  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.groupDate.valueChanges.subscribe(fn);
  }

  // Called by Angular to register a touched callback
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.groupDate.disable();
    } else {
      this.groupDate.enable();
    }
  }
}