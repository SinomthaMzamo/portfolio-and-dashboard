import { Component, inject, signal, WritableSignal } from '@angular/core';
import { BadgeComponent } from "../../shared/badge/badge.component";
import { Education } from '../../models/education.model';
import { CommonModule } from '@angular/common';
import { TileComponent } from "./tile/tile.component";
import { FlipTileComponent } from "./flip-tile/flip-tile.component";
import { ExperienceEntry } from '../../models/experience.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-education',
  imports: [CommonModule, BadgeComponent, TileComponent, FlipTileComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educationHistory: Education[] = [
    {
      institution: "WeThinkCode_",
      qualification: "Systems Development NQF 5",
      duration: {
        start: "Sep 2023",
        end: "Dec 2024"
      },
      grade: "A-",
      skills: [
        { skill: "python", colour: "blue" },
        { skill: "java", colour: "dark" },
        { skill: "test-driven development", colour: "pink" },
        { skill: "brownfields development", colour: "gray" },
        { skill: "oop", colour: "green" },
        { skill: "full-stack development", colour: "mustard" }
      ],
      imgSrc: 'wtc-logo-resized.png'
    },
    {
      institution: "University of the Free State",
      qualification: "BSc Physics & Astrophysics",
      duration: {
        start: "Jan 2020",
        end: "May 2022"
      },
      grade: "Incomplete",
      skills: [
        { skill: "critical thinking", colour: "blue" },
        { skill: "research skills", colour: "green" },
        { skill: "problem solving", colour: "mustard" },
        { skill: "analytical thinking", colour: "dark" },
        { skill: "scientific computing", colour: "pink" },
        { skill: "mathematical modelling", colour: "gray" }
      ],
      imgSrc: 'ufs-resized.png'
    },
    {
      institution: "Wynberg Girls' High School",
      qualification: "National Senior Certificate",
      duration: {
        start: "Jan 2012",
        end: "Dec 2016"
      },
      grade: "A- with 5 distinctions",
      skills: [
        { skill: "academic writing", colour: "dark" },
        { skill: "conveying complex information", colour: "pink" },
        { skill: "time management", colour: "blue" },
        { skill: "leadership skills", colour: "green" },
        { skill: "level 3 first-aid", colour: "gray" },
        { skill: "public speaking", colour: "mustard" }
      ],
      imgSrc: 'wghs-resized.png'
    },
  ]
  private http = inject(HttpClient);
  // Signal to store experience data
  // ✅ Use WritableSignal instead of Signal
  education: WritableSignal<Education[]> = signal([]);


  constructor() {
    this.loadExperiences();
  }

  loadExperiences() {
    const url = 'https://vif576si5j.execute-api.af-south-1.amazonaws.com/Prod/education/';

    this.http.get<any>(url).subscribe({
      next: (res) => {
        if (res.data) {
          this.education.set(res.data);
        }
      },
      error: (err) => {
        console.error('API error:', err);
      }
    });
  }
}
