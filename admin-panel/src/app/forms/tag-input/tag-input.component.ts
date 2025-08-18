import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  selector: 'app-tag-input',
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.css']
})
export class TagInputComponent {
  @Input({required:true}) label!:string;
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