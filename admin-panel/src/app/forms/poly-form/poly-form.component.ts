import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AddBlogFormComponent } from "../add-blog-form/add-blog-form.component";
import { AddEducationFormComponent } from "../add-education-form/add-education-form.component";
import { AddExperienceFormComponent } from "../add-experience-form/add-experience-form.component";
import { AddProjectFormComponent } from "../add-project-form/add-project-form.component";
import { UploadImageFormComponent } from "../upload-image-form/upload-image-form.component";
import { UploadDocumentFormComponent } from "../upload-document-form/upload-document-form.component";

@Component({
  selector: 'app-poly-form',
  imports: [CommonModule, AddBlogFormComponent, AddEducationFormComponent, AddExperienceFormComponent, AddProjectFormComponent, UploadImageFormComponent, UploadDocumentFormComponent],
  templateUrl: './poly-form.component.html',
  styleUrl: './poly-form.component.css'
})
export class PolyFormComponent {
  @Input({required:true}) variant!: 'project' | 'education' | 'experience' | 'blog' | 'avatarUpload' | 'docUpload';
}
