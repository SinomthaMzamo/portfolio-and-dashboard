import { Component, computed, inject, signal, WritableSignal } from '@angular/core';
import { TaskCardComponent, TaskData } from "./main/task-card/task-card.component";
import { CommonModule } from '@angular/common';
import { MessagesTabComponent } from "./main/messages-tab/messages-tab.component";
import { AboutComponent } from "./main/about/about.component";
import { HttpClient } from '@angular/common/http';
import { BlogPost } from './models/blog.model';
import { Education } from './models/education.model';
import { ExperienceEntry } from './models/experience.model';
import { Project } from './models/project.model';
import { LoadingScreenComponent } from "./shared/loading-screen/loading-screen.component";
// {"subject":"GREEN","message":"the colour green is a beautiful colour","id":"mes-0-b6aa4cac","email":"sitholekarabo0@gmail.com","name":"Karabo"}
export type MessagesData = {
  subject:string;
  message:string;
  id:string;
  email:string;
  name:string;
  createdAt: string;
  hasReplied:boolean;
}

export type SiteLoadData = {
  blogs:BlogPost[], projects:Project[], education:Education[], experiences:ExperienceEntry[]
}

@Component({
  selector: 'app-root',
  imports: [TaskCardComponent, CommonModule, MessagesTabComponent, AboutComponent, LoadingScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sinomtha | Portfolio Dashboard';
  private http = inject(HttpClient);
  // Signal to store experience data
  // ✅ Use WritableSignal instead of Signal
  messagesData: WritableSignal<MessagesData[]> = signal([]);
  siteData: WritableSignal<SiteLoadData> = signal({blogs: [], projects: [], education: [], experiences: []});
  taskData: WritableSignal<TaskData[]> = signal([]);
  totals = computed(() => ({
    experiences: this.siteData().experiences.length,
    projects: this.siteData().projects.length,
    education: this.siteData().education.length,
    blogs: this.siteData().blogs.length,
  }));

  isLoading = signal(false);
  showLoadingScreen(){this.isLoading.set(true)};
  hideLoadingScreen(){this.isLoading.set(false)};
  
  constructor() {
    this.showLoadingScreen();
    this.loadMessageData();
    this.loadCoreResources();
    setTimeout(() => {
      this.hideLoadingScreen();
    }, 3000);
  }

  loadCoreResources() {
    const url = 'https://9o9p856081.execute-api.af-south-1.amazonaws.com/Prod/core';

    this.http.get<any>(url).subscribe({
      next: (res) => {
        if (res.data) {
          this.siteData.set(res.data);
          console.log("✅SITE DATA LOADED: ", res.data);
          this.loadTaskCardFaces();
        }
      },
      error: (err) => {
        console.error('API error:', err);
        
      }
    });
  }
  
  loadMessageData() {
    const url = 'https://9o9p856081.execute-api.af-south-1.amazonaws.com/Prod/contact';

    this.http.get<any>(url).subscribe({
      next: (res) => {
        if (res.data) {
          this.messagesData.set(res.data);
        }
      },
      error: (err) => {
        console.error('API error:', err);
      }
    });
  }

  loadTaskCardFaces(){

    this.taskData.set([
      {
        numberTagLine: {
          number: this.totals().experiences,
          tagline: 'career milestones'
        },
        title: 'Experience',
        formVariant: 'experience',
        icon: 'fas fa-briefcase'
      },
      {
        numberTagLine: {
          number: this.totals().education,
          tagline: 'study highlights'
        },
        title: 'Education',
        formVariant:'education',
        icon: "fas fa-graduation-cap"
      },
      {
        numberTagLine: {
          number: this.totals().projects,
          tagline: 'live projects'
        },
        title: 'Projects',
        formVariant: 'project',
        icon: "fas fa-code"
      },
      {
        numberTagLine: {
          number: this.totals().blogs,
          tagline: 'published works'
        },
        title: 'Blogs',
        formVariant: 'blog',
        icon: "fas fa-file-text"
      }
    ]);
    console.log("✅ Task data loaded:", this.taskData());
  }
  

}
