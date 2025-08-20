import { Input, Directive } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Directive()
export abstract class BaseField implements ControlValueAccessor {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) id!: string;
  @Input({ required: true }) name!: string;
  @Input() placeholder?: string;
  @Input({ required: true }) type!: string;

  value: string | string[] = '';
  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value || '';
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.value = val;
    this.onChange(val);
  }
}
