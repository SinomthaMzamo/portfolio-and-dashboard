import { Component, inject, Input, signal, WritableSignal } from '@angular/core';
import { CardsComponent } from "./cards/cards.component";
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, CardsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  @Input({required:true}) allProjects!:Project[];

    get sorted(): Project[] {
        return this.allProjects
          // .filter(msg => !msg.hasReplied) 
          .sort((a, b) => {
            const tA = a.duration.endDate ? Date.parse(a.duration.endDate) : 0;
            const tB = b.duration.endDate ? Date.parse(b.duration.endDate) : 0;
            const aMs = Number.isNaN(tA) ? 0 : tA;
            const bMs = Number.isNaN(tB) ? 0 : tB;
            return bMs - aMs; // newest first
          });
      }
    
      
  
    // for local testing and development
    projectsList: Project[] = [
      {
        name: 'Minesweeper',
        description: 'My first baby! A fully interactive Minesweeper game built using Python, Pygame, and JSON. It follows the MVC architecture and applies core OOP principles. I used Numpy for efficient grid logic and game-state management.',
        tags: [{ tag: "python", colour: "orange" }, { tag: "MVC", colour: "green" }, { tag: "oop", colour: "mustard" }, { tag: "numpy", colour: "blue" }],
        imgSrc: 'minesweeper.jpg',
        duration: {
          startDate: 'Start date',
          endDate: 'End date'
        }
      },
      {
        name: 'Bhala Edolweni',
        description: 'My first full-stack project: a debt tracking tool with both a CLI and GUI frontend. Built with Flask and React using a layered architecture (service, API, client). It supports CRUD operations via a RESTful interface and cleanly separates concerns for scalability.',
        tags: [{ tag: "rest API", colour: "green" }, { tag: "full-stack", colour: "mustard" }, { tag: "layered", colour: "pink" }],
        imgSrc: 'bhala.jpg',
        duration: {
          startDate: 'Start date',
          endDate: 'End date'
        }
      },
      {
        name: 'Burn after reading',
        description: 'A secure, ephemeral messaging app for one-time-use letters. Messages are password-protected and self-destruct after a single view. Hosted using AWS Elastic Beanstalk and S3 static hosting. Focused on privacy, simplicity, and cloud deployment.',
        tags: [{ tag: "encryption", colour: "blue" }, { tag: "S3", colour: "green" }, { tag: "EC2 patching", colour: "mustard" }],
        imgSrc: 'b-a-r.jpg',
        duration: {
          startDate: 'Start date',
          endDate: 'End date'
        }
      }
    ]

}
