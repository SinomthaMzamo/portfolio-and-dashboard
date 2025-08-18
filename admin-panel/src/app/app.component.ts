import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NumberTagLineComponent } from "./components/number-tag-line/number-tag-line.component";
import { TaskCardComponent, TaskData } from "./main/task-card/task-card.component";
import { CommonModule } from '@angular/common';
import { MessagesTabComponent } from "./main/messages-tab/messages-tab.component";
import { AboutComponent } from "./main/about/about.component";
import { ImageUploaderComponent } from "./forms/image-uploader/image-uploader.component";
import { SimpleFormComponent } from './forms/simple-form/simple-form.component';
import { AddProjectFormComponent } from "./forms/add-project-form/add-project-form.component";
import { AddBlogFormComponent } from "./forms/add-blog-form/add-blog-form.component";
import { AddEducationFormComponent } from "./forms/add-education-form/add-education-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NumberTagLineComponent, TaskCardComponent, CommonModule, MessagesTabComponent, AboutComponent, SimpleFormComponent, AddProjectFormComponent, AddBlogFormComponent, AddEducationFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'admin-panel';
  taskData: TaskData[] = [
    {
      numberTagLine: {
        number: 3,
        tagline: 'career milestones'
      },
      title: 'Experience'
    },
    {
      numberTagLine: {
        number: 4,
        tagline: 'study highlights'
      },
      title: 'Education'
    },
    {
      numberTagLine: {
        number: 3,
        tagline: 'live projects'
      },
      title: 'Projects'
    },
    {
      numberTagLine: {
        number: 6,
        tagline: 'published works'
      },
      title: 'Blogs'
    }
  ]
}
