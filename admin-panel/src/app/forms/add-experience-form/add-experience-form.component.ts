import { Component } from '@angular/core';
import { TextInputComponent } from "../fields/text-input/text-input.component";
import { DateRangeComponent } from "../fields/date-range/date-range.component";
import { DropdownComponent } from "../fields/dropdown/dropdown.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  tasks: string[];
}

@Component({
  selector: 'app-add-experience-form',
  imports: [TextInputComponent, DateRangeComponent, DropdownComponent, FormsModule, CommonModule],
  templateUrl: './add-experience-form.component.html',
  styleUrl: './add-experience-form.component.css'
})
export class AddExperienceFormComponent {
  skills: Skill[] = [];

  // Add a new skill
  addSkill() {
    this.skills.push({ name: '', tasks: [''] });
  }

  // Add a new task to a skill
  addTask(skillIndex: number) {
    this.skills[skillIndex].tasks.push('');
  }

  // Optional: remove a task
  removeTask(skillIndex: number, taskIndex: number) {
    this.skills[skillIndex].tasks.splice(taskIndex, 1);
  }

  // Optional: remove a skill
  removeSkill(skillIndex: number) {
    this.skills.splice(skillIndex, 1);
  }
}
