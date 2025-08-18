import { Component } from '@angular/core';
import { ImageUploaderComponent } from "../image-uploader/image-uploader.component";
import { TagInputComponent } from '../tag-input/tag-input.component';
import { TextInputComponent } from "../fields/text-input/text-input.component";
import { TextareaComponent } from "../fields/textarea/textarea.component";
import { DateInputComponent } from "../fields/date-input/date-input.component";
import { DateRangeComponent } from "../fields/date-range/date-range.component";
import { PasswordInputComponent } from "../fields/password-input/password-input.component";

@Component({
  selector: 'app-simple-form',
  imports: [ImageUploaderComponent, TagInputComponent, TextInputComponent, TextareaComponent, DateInputComponent, DateRangeComponent, PasswordInputComponent],
  templateUrl: './simple-form.component.html',
  styleUrl: './simple-form.component.css'
})
export class SimpleFormComponent {

}
