import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  dropdownOpen = false;
  selectedRole = 'Select Job Title';
  showCustomRole = false;

  jobTitles = [
    { name: 'Junior Software Developer', type: 'developer' },
    { name: 'Frontend Developer', type: 'developer' },
    { name: 'Backend Developer', type: 'developer' },
    { name: 'Full-Stack Developer', type: 'developer' },
    { name: 'UX/UI Designer', type: 'designer' },
    { name: 'Data Analyst', type: 'developer' },
    { name: 'Project Manager', type: 'manager' },
    { name: 'Other', type: 'other' }
  ];

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectRole(role: any) {
    this.selectedRole = role.name;
    this.showCustomRole = role.type === 'other';
    this.dropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.dropdownOpen = false;
    }
  }
}
