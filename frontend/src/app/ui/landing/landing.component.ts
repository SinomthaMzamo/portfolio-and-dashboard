import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'] // typo: style**Urls**
})
export class LandingComponent implements AfterViewInit {
  @ViewChild('skill') skillRef!: ElementRef<HTMLSpanElement>;

  skills = ["Python", "Java", "UX/UI Design", "Typescript", "Angular"];
  typingSpeed = 200;
  pauseTime = 1500;

  index = 0;
  charIndex = 0;
  typingInterval: any;

  ngAfterViewInit() {
    this.typingInterval = setInterval(() => this.typeSkill(), this.typingSpeed);
  }

  typeSkill() {
    const currentSkill = this.skills[this.index];

    if (this.charIndex <= currentSkill.length) {
      this.skillRef.nativeElement.textContent = currentSkill.slice(0, this.charIndex);
      this.charIndex++;
    } else {
      clearInterval(this.typingInterval);

      setTimeout(() => {
        this.skillRef.nativeElement.classList.add("thrown-left");

        setTimeout(() => {
          this.skillRef.nativeElement.classList.remove("thrown-left");
          this.skillRef.nativeElement.textContent = '';
          this.charIndex = 0;
          this.index = (this.index + 1) % this.skills.length;

          this.typingInterval = setInterval(() => this.typeSkill(), this.typingSpeed);
        }, 300);
      }, this.pauseTime);
    }
  }
}
