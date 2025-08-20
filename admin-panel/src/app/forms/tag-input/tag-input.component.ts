import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { BaseField } from '../fields/base-field';

@Component({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  selector: 'app-tag-input',
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TagInputComponent),
      multi: true
    }
  ]
})
export class TagInputComponent extends BaseField implements ControlValueAccessor{
  tagsControl = new FormControl('');
  tagList: string[] = [];
  isInputValid = true;
  maxTags = 5;

  // Called whenever the input changes
  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement; // safe cast here
    const value = input.value;
    this.updateTagList(value);
    this.checkValidity();
  }

  // called by Angular forms
  override onChange: (tags: string[]) => void = () => {};
  override onTouched: () => void = () => {};

  override registerOnChange(fn: any): void { this.onChange = fn; }
  override registerOnTouched(fn: any): void { this.onTouched = fn; }

  /** ControlValueAccessor helpers */
  override writeValue(value: string[] | null): void {
    if (!value) {
      return;
    }

    this.tagList = value;
  }

  private formatTagString(tagString: string): string[] {
    const splitList = tagString.split(',');
    const removeDuplicates = new Set(splitList);
    return [...removeDuplicates].map(txt => txt.replace(/\s+/g, '')); // remove spaces
  }

  private updateTagList(input: string) {
    const newTagList = this.formatTagString(input);
  
    if (newTagList.length > this.maxTags) {
      this.isInputValid = false;
    } else {
      this.tagList = newTagList;
      this.onChange(newTagList); // <-- notify Angular form
      this.isInputValid = true;
    }
  
    this.tagsControl.setValue(this.tagList.join(','), { emitEvent: false });
  }

  removeTag(index: number) {
    this.tagList.splice(index, 1);
    this.updateTagList(this.tagList.join(','));
  }

  private checkValidity() {
    if (!this.isInputValid) {
      this.tagsControl.setErrors({ maxTags: true });
    } else {
      this.tagsControl.setErrors(null);
    }
  }
}