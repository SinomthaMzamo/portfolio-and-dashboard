import { Component, inject, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { AboutComponent } from "./ui/about/about.component";
import { LandingComponent } from "./ui/landing/landing.component";
import { ExperienceComponent } from "./ui/experience/experience.component";
import { EducationComponent } from "./ui/education/education.component";
import { ProjectsComponent } from "./ui/projects/projects.component";
import { BlogComponent } from "./ui/blog/blog.component";
import { ContactComponent } from "./ui/contact/contact.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BlogPost } from './models/blog.model';
import { Education } from './models/education.model';
import { ExperienceEntry } from './models/experience.model';
import { Project } from './models/project.model';
import { WorkExperienceComponent } from "./ui/work-experience/work-experience.component";

export type SiteLoadData = {
  blogs:BlogPost[], projects:Project[], education:Education[], experiences:ExperienceEntry[]
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, AboutComponent, LandingComponent, ExperienceComponent, EducationComponent, ProjectsComponent, BlogComponent, ContactComponent, FooterComponent, WorkExperienceComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  private http = inject(HttpClient);
  // Signal to store experience data
  // ✅ Use WritableSignal instead of Signal
  siteData: WritableSignal<SiteLoadData> = signal({blogs: [], projects: [], education: [], experiences: []});


  constructor() {
    this.loadExperiences();
  }

  loadExperiences() {
    const url = 'https://vif576si5j.execute-api.af-south-1.amazonaws.com/Prod/core';

    this.http.get<any>(url).subscribe({
      next: (res) => {
        if (res.data) {
          this.siteData.set(res.data);
        }
      },
      error: (err) => {
        console.error('API error:', err);
      }
    });
  }
}
