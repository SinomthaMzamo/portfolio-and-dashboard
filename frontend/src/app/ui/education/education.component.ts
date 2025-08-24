import { Component, Input } from '@angular/core';
import { Education } from '../../models/education.model';
import { CommonModule } from '@angular/common';
import { FlipTileComponent } from "./flip-tile/flip-tile.component";

@Component({
  selector: 'app-education',
  imports: [CommonModule, FlipTileComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  @Input({required:true}) allEducation!:Education[];
  educationHistory: Education[] = [
    {
      institution: "WeThinkCode_",
      qualification: "Systems Development NQF 5",
      duration: {
        startDate: "Sep 2023",
        endDate: "Dec 2024"
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
        startDate: "Jan 2020",
        endDate: "May 2022"
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
        startDate: "Jan 2012",
        endDate: "Dec 2016"
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

  // Sort newest first
  get sorted(): Education[] {
    return this.allEducation
      // .filter(msg => !msg.hasReplied) 
      .sort((a, b) => {
        const tA = a.duration.endDate ? Date.parse(a.duration.endDate) : 0;
        const tB = b.duration.endDate ? Date.parse(b.duration.endDate) : 0;
        const aMs = Number.isNaN(tA) ? 0 : tA;
        const bMs = Number.isNaN(tB) ? 0 : tB;
        return bMs - aMs; // newest first
      });
  }

  // Helper to format the timestamp for display
  formatDate(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
  }
}