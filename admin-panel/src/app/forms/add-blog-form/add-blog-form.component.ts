import { Component } from '@angular/core';
import { TextInputComponent } from "../fields/text-input/text-input.component";
import { TextareaComponent } from "../fields/textarea/textarea.component";
import { DateRangeComponent } from "../fields/date-range/date-range.component";
import { ImageUploaderComponent } from "../image-uploader/image-uploader.component";
import { TagInputComponent } from "../tag-input/tag-input.component";
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'
import { DateInputComponent } from "../fields/date-input/date-input.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-blog-form',
  imports: [ReactiveFormsModule, FormsModule, TextInputComponent, TextareaComponent, DateRangeComponent, ImageUploaderComponent, TagInputComponent, DateInputComponent],
  templateUrl: './add-blog-form.component.html',
  styleUrl: './add-blog-form.component.css'
})
export class AddBlogFormComponent {
  blogForm = new FormGroup({
  title: new FormControl(''),
  introduction: new FormControl(''),
  datePublished: new FormControl(''),
  readTime: new FormControl(''),
  image: new FormControl(null),
  tags: new FormControl([]),
  url: new FormControl('')
  });

  constructor(private http: HttpClient) {}

  onSubmit(formValue: any) {
    console.log(formValue);
    if (!this.blogForm.valid) {
      alert('Please fill out all required fields.');
      return;
    }
    const fileList:File[] | null = formValue.image as File[] | null;
    const file = fileList![0];
  
    let fileMeta: any = {};
  
    if (file) {
      fileMeta = {
        fileName: file.name,
        fileType: file.type,
      };
      console.log("file meta:", fileMeta)
    }
  
    // Metadata payload (NOT including the raw file yet)
    const body = {
      title: formValue.title,
      introduction: formValue.introduction,
      datePublished: formValue.datePublished,
      tags: formValue.tags,
      url: formValue.url,
      ...fileMeta
    };
  
    const apiUrl = 'https://9o9p856081.execute-api.af-south-1.amazonaws.com/Prod/blogs';
  
    this.http.post<any>(apiUrl, body, {
      headers: { 'Content-Type': 'application/json' }
    }).subscribe({
      next: async (res) => {
        console.log("API responded:", res);
  
        // If file present, upload to S3
        if (file && res.uploadUrl) {
          try {
            await this.http.put(res.uploadUrl, file, {
              headers: { 'Content-Type': file.type }
            }).toPromise();
  
            console.log("✅ File uploaded successfully to S3:", res.item.imgSrc);
            alert("Project created successfully!");
          } catch (err) {
            console.error("Error uploading to S3:", err);
            alert("Error uploading file to S3");
          }
        } else {
          alert("Project created successfully (no image uploaded).");
        }
      },
      error: (err) => {
        console.error("API error:", err);
        alert('Error sending project: ' + err.message);
      }
    });
  }
    
}

