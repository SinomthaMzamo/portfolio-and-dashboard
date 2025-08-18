import { Component } from '@angular/core';
import { TextInputComponent } from "../fields/text-input/text-input.component";
import { TextareaComponent } from "../fields/textarea/textarea.component";
import { DateRangeComponent } from "../fields/date-range/date-range.component";
import { DateInputComponent } from "../fields/date-input/date-input.component";
import { ImageUploaderComponent } from "../image-uploader/image-uploader.component";
import { TagInputComponent } from "../tag-input/tag-input.component";
import { PasswordInputComponent } from "../fields/password-input/password-input.component";

@Component({
  selector: 'app-add-project-form',
  imports: [
    TextInputComponent,
    TextareaComponent,
    DateRangeComponent,
    DateInputComponent,
    ImageUploaderComponent,
    TagInputComponent,
    PasswordInputComponent
],
  templateUrl: './add-project-form.component.html',
  styleUrl: './add-project-form.component.css'
})
export class AddProjectFormComponent {

}
