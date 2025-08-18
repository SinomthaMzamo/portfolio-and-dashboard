import { Component } from '@angular/core';
import { TextInputComponent } from "../fields/text-input/text-input.component";
import { TextareaComponent } from "../fields/textarea/textarea.component";
import { DateRangeComponent } from "../fields/date-range/date-range.component";
import { ImageUploaderComponent } from "../image-uploader/image-uploader.component";
import { TagInputComponent } from "../tag-input/tag-input.component";

@Component({
  selector: 'app-add-blog-form',
  imports: [TextInputComponent, TextareaComponent, DateRangeComponent, ImageUploaderComponent, TagInputComponent],
  templateUrl: './add-blog-form.component.html',
  styleUrl: './add-blog-form.component.css'
})
export class AddBlogFormComponent {

}
