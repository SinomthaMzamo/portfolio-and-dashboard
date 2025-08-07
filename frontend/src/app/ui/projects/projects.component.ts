import { Component, inject, signal, WritableSignal } from '@angular/core';
import { CardsComponent } from "./cards/cards.component";
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.model';
import { HttpClient } from '@angular/common/http';
import { ExperienceEntry } from '../../models/experience.model';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, CardsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
    projectsList: Project[] = [
      {
        name: 'Minesweeper',
        description: 'My first baby! A fully interactive Minesweeper game built using Python, Pygame, and JSON. It follows the MVC architecture and applies core OOP principles. I used Numpy for efficient grid logic and game-state management.',
        tags: [{tag:"python", colour:"orange"}, {tag:"MVC", colour:"green"}, {tag:"oop", colour:"mustard"}, {tag:"numpy", colour:"blue"}],
        imgSrc: 'minesweeper.jpg'
      },
      {
        name: 'Bhala Edolweni',
        description: 'My first full-stack project: a debt tracking tool with both a CLI and GUI frontend. Built with Flask and React using a layered architecture (service, API, client). It supports CRUD operations via a RESTful interface and cleanly separates concerns for scalability.',
        tags: [{tag:"rest API", colour:"green"}, {tag:"full-stack", colour:"mustard"}, {tag:"layered", colour:"pink"}],
        imgSrc: 'bhala.jpg'
      },
      {
        name: 'Burn after reading',
        description: 'A secure, ephemeral messaging app for one-time-use letters. Messages are password-protected and self-destruct after a single view. Hosted using AWS Elastic Beanstalk and S3 static hosting. Focused on privacy, simplicity, and cloud deployment.',
        tags: [{tag:"encryption", colour:"blue"}, {tag:"S3", colour:"green"}, {tag:"EC2 patching", colour:"mustard"}],
        imgSrc: 'b-a-r.jpg'
      }
    ]

    private http = inject(HttpClient);
    // Signal to store experience data
    // ✅ Use WritableSignal instead of Signal
    projects: WritableSignal<Project[]> = signal([]);


    constructor() {
      this.loadExperiences();
    }

    loadExperiences() {
      const url = 'https://vif576si5j.execute-api.af-south-1.amazonaws.com/Prod/projects/';

      this.http.get<any>(url).subscribe({
        next: (res) => {
          if (res.data) {
            this.projects.set(res.data);
          }
        },
        error: (err) => {
          console.error('API error:', err);
        }
      });
    }

}
