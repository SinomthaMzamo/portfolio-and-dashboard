import { AfterViewInit, Component, ElementRef, HostListener, QueryList, ViewChildren } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dtl',
  imports: [ItemComponent, CommonModule],
  templateUrl: './dtl.component.html',
  styleUrl: './dtl.component.css'
})
export class DtlComponent implements AfterViewInit {
  @ViewChildren(ItemComponent) items!: QueryList<ItemComponent>;

  events = [
    { title: 'First Sparks',year: 'Jan 2023 - Sep 2023', text: "My programming journey began with C# and Python textbooks, where I first explored the magic of problem-solving through code. I built simple console applications and Windows Forms interfaces while uncovering the logic behind algorithms, data types, and control structures. Programming taught me that optimism is foundational — there's always a solution." },
    { title: 'WeThinkCode_', year: 'Sep 2023 - Dec 2024', text: "At WeThinkCode_, I refined my knowledge of software fundamentals while embracing methodologies like Test-Driven Development and Agile sprints. I thrived in collaborative projects that emphasized peer-learning, social impact, and solving real-world problems — all aligned with my own values." },
    { title: 'My First Algorithms', year: 'Dec 2023 - Jan 2023', text: "Built a procedurally generated maze using depth-first search (DFS) and breadth-first search (BFS), both for path creation and navigation. Created both an ASCII and graphical interface using Python Turtle. This was my first deep dive into algorithmic thinking and visualizing problem-solving." },
    { title: 'My First App', year: 'Feb 2024 - May 2024', text: "Designed and developed a custom Minesweeper clone as my first full solo application. Applied OOP principles and optimized logic using NumPy for efficient space and time performance. This project deepened my appreciation for software architecture and usability. It was also my first live demo." },
    { title: 'Machine Learning', year: 'Aug 2024', text: "Participated in the AWS DeepRacer challenge, where I learned how reinforcement learning enables virtual cars to train and improve autonomously. This was my first exposure to machine learning models and hands-on experimentation with AI systems." },
    { title: 'First Hackathon Victory', year: 'Sep 2024', text: "Won the “Best Solution” award at the Mukuru SheHacks hackathon by designing an app that helped remittance recipients easily find nearby cash-out locations. It taught me how clarity in understanding a problem statement translates into impactful technical solutions."},
    { title: 'Building for Real People', year: 'Sep - Nov 2024', text: "Developed two real-world applications: Bhala Edolweni, a debt management tool with both CLI and React GUI, and ClubConnect, a platform to help students engage with clubs on campus. These were my first full-stack builds — solving actual problems, not just hypothetical ones."},
    { title: 'Scaling to the Cloud', year: 'Oct - Dec 2024', text: "After creating several apps, I sought scalable ways to distribute them. Through the AWS Cloud Development elective, I learned to deploy static websites, containerized applications with ECS, and even a full-stack serverless app — all while embracing the scalability and resilience of cloud-native design." },
    { title: 'Safety IO Internship', year: 'Jan 2025 - Present', text: "Selected for a specialized internship at Safety IO, where we followed a comprehensive curriculum covering the entire SDLC. We received in-depth training in design thinking, UX/UI principles, Agile teamwork, and modern technologies like machine learning and industrial IoT. It was a holistic preparation for real-world software engineering."},
  ];

  ngAfterViewInit() {
    this.checkInView();
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  onScrollOrResize() {
    this.checkInView();
  }

  private checkInView() {
    this.items.forEach(item => item.checkInView());
  }
}





