import { Component } from '@angular/core';
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

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, AboutComponent, LandingComponent, ExperienceComponent, EducationComponent, ProjectsComponent, BlogComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
