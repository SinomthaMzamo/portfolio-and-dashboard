import { Component, inject, Input, signal, WritableSignal } from '@angular/core';
import { CardComponent } from "./card/card.component";
import { BlogPost } from '../../models/blog.model';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ExperienceEntry } from '../../models/experience.model';
import { MasonryGridComponent } from "./masonry-grid/masonry-grid.component";

@Component({
  selector: 'app-blog',
  imports: [CommonModule, CardComponent, MasonryGridComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  @Input({required:true}) allBlogs!:BlogPost[];
  blogPosts:BlogPost[] = [
    {
      title: "Why I Still Love the CLI",
      introduction: "Before I wrote much code, I was navigating WeThinkCode’s LMS entirely through the terminal. At first, it felt like a constraint — but over time, the CLI became my favorite tool. There's something clean and disciplined about working line by line, command by command.",
      tags: [
        { tag: "CLI", colour: "dark" },
        { tag: "Shell", colour: "blue" },
        { tag: "Dev Tools", colour: "green" },
        { tag: "WTC", colour: "mustard" }
      ],
      readTime: 4,
      datePublished: new Date("2025-07-15"),
      imgSrc: 'cli-2.webp'
    },
    {
      title: "From Folders to Layers: My Shift to Clean Architecture",
      introduction: "I used to organize code like everyone else does at first: folders for 'scripts', 'utils', and maybe a few random helpers. Then came MVC. Then, finally, I started thinking in layers — separating concerns with repositories, services, and API endpoints.",
      tags: [
        { tag: "Architecture", colour: "dark" },
        { tag: "OOP", colour: "green" },
        { tag: "MVC", colour: "blue" },
        { tag: "Layers", colour: "pink" }
      ],
      readTime: 5,
      datePublished: new Date("2025-07-20"),
      imgSrc: 'layered-1.webp'
    },
    {
      title: "My Flask API Starter Kit",
      introduction: "Every new project felt like reinventing the wheel — until I created my own Flask API boilerplate. It's simple but solid: includes CORS setup, JSON schema validation, and tests baked in from the start.",
      tags: [
        { tag: "Flask", colour: "blue" },
        { tag: "REST API", colour: "dark" },
        { tag: "JSON", colour: "green" },
        { tag: "Testing", colour: "mustard" }
      ],
      readTime: 3,
      datePublished: new Date("2025-07-25"),
      imgSrc: 'flask.png'
    },
    {
      title: "Kotlin Multiplatform: Why I Gave It a Shot",
      introduction: "I never thought I'd touch mobile development — but Kotlin Multiplatform made it too tempting to ignore. I started exploring it as part of a hackathon project, and I’ve been slowly learning how to share code between frontend and backend.",
      tags: [
        { tag: "KMP", colour: "dark" },
        { tag: "Kotlin", colour: "pink" },
        { tag: "Mobile", colour: "green" },
        { tag: "Backend", colour: "blue" }
      ],
      readTime: 4,
      datePublished: new Date("2025-07-30"),
      imgSrc: 'kmp.png'
    },
    {
      title: "My Flask API Starter Kit",
      introduction: "Every new project felt like reinventing the wheel — until I created my own Flask API boilerplate. It's simple but solid: includes CORS setup, JSON schema validation, and tests baked in from the start.",
      tags: [
        { tag: "Flask", colour: "blue" },
        { tag: "REST API", colour: "dark" },
        { tag: "JSON", colour: "green" },
        { tag: "Testing", colour: "mustard" }
      ],
      readTime: 3,
      datePublished: new Date("2025-07-25"),
      imgSrc: 'flask.png'
    },
    {
      title: "Kotlin Multiplatform: Why I Gave It a Shot",
      introduction: "I never thought I'd touch mobile development — but Kotlin Multiplatform made it too tempting to ignore. I started exploring it as part of a hackathon project, and I’ve been slowly learning how to share code between frontend and backend.",
      tags: [
        { tag: "KMP", colour: "dark" },
        { tag: "Kotlin", colour: "pink" },
        { tag: "Mobile", colour: "green" },
        { tag: "Backend", colour: "blue" }
      ],
      readTime: 4,
      datePublished: new Date("2025-07-30"),
      imgSrc: 'kmp.png'
    }
  ];

  timeAgo(dateString: string): string {
    const inputDate = new Date(dateString);
    const now = new Date();
    const diffInMs = now.getTime() - inputDate.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  
    if (diffInDays < 14) {
      return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
    }
  
    const diffInWeeks = Math.floor(diffInDays / 7);
    if (diffInWeeks < 4) {
      return `${diffInWeeks} week${diffInWeeks !== 1 ? 's' : ''} ago`;
    }
  
    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) {
      return `${diffInMonths} month${diffInMonths !== 1 ? 's' : ''} ago`;
    }
  
    const diffInYears = Math.floor(diffInMonths / 12);
    return `${diffInYears} year${diffInYears !== 1 ? 's' : ''} ago`;
  }
  

}