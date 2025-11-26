import { Component, Input } from '@angular/core';
import { ExperienceEntry } from '../../models/experience.model';
import { TabFlipCardComponent } from "./tab-flip-card/tab-flip-card.component";

@Component({
  selector: 'app-work-experience',
  imports: [TabFlipCardComponent],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  @Input({required:true}) allWorkExperience!:ExperienceEntry[];
//   workExperience: ExperienceEntry[] = 
//     [
//       {
//         header: {
//           role: "Software Developer Intern at Safety IO", location: "Cape Town", duration: { startDate: "Jan 2025", endDate: "Present" }, mode: "Hybrid",
//           roleDetails: {
//             company: 'Safety IO',
//             role: 'Software Developer Intern'
//           }
//         },
//         tabs: 
//         [ 
//           {
//             name:"Software Engineering", 
//             notableOutcomes: [
//               "Applied TypeScript and object-oriented principles to develop modular, maintainable features.",
//               "Contributed to Angular components, enhancing the frontend’s responsiveness and accessibility.",
//               "Integrated Node.js services with RESTful APIs to support backend workflows and microservices.",
//               "Designed and executed PostgreSQL queries to support data-driven features and debugging efforts."
//             ]
//           },
//           {
//             name: "UX/UI Design",
//             notableOutcomes: [
//               "Applied an end-to-end UX process using Miro and Figma for user research, ideation, wireframes, and prototypes.",
//               "Facilitated structured design critiques using dot voting, Miro boards, and iterative feedback loops.",
//               "Created developer-friendly design packages for smooth handoff to cross-functional teams.",
//               "Designed organizational diagrams and team maps with strong information architecture principles."
//             ]
//           },
//           {
//             name: "Agile Processes",
//             notableOutcomes: [
//               "Actively participated in daily standups, weekly retrospectives, and demo sessions.",
//               "Maintained tasks on a Kanban board, refined backlogs, and contributed to clear definitions of done.",
//               "Helped shape team agreements that fostered psychological safety, inclusion, and team cohesion.",
//               "Practiced sprint planning using estimation techniques and prioritized collaborative delivery."
//             ]
//           },
//           {
//             name: "Cloud Development",
//             notableOutcomes: [
//               "Prepared for the AWS Certified Cloud Practitioner exam by following internal study plans and labs.",
//               "Co-designed a cloud-focused curriculum with hands-on AWS practice environments.",
//               "Gained exposure to real-world deployment scenarios through internal capstone projects.",
//               "Explored cloud-native design principles including scalability, monitoring, and cost-awareness."
//             ]
//           }
//         ]
//       },
//       {
//         header: {
//           role: "Software Developer Intern at Safety IO", location: "Cape Town", duration: { startDate: "Jan 2025", endDate: "Present" }, mode: "Hybrid",
//           roleDetails: {
//             company: 'Safety IO',
//             role: 'Software Developer Intern'
//           }
//         },
//         tabs: 
//         [ 
//           {
//             name:"Software Engineering", 
//             notableOutcomes: [
//               "Applied TypeScript and object-oriented principles to develop modular, maintainable features.",
//               "Contributed to Angular components, enhancing the frontend’s responsiveness and accessibility.",
//               "Integrated Node.js services with RESTful APIs to support backend workflows and microservices.",
//               "Designed and executed PostgreSQL queries to support data-driven features and debugging efforts."
//             ]
//           },
//           {
//             name: "UX/UI Design",
//             notableOutcomes: [
//               "Applied an end-to-end UX process using Miro and Figma for user research, ideation, wireframes, and prototypes.",
//               "Facilitated structured design critiques using dot voting, Miro boards, and iterative feedback loops.",
//               "Created developer-friendly design packages for smooth handoff to cross-functional teams.",
//               "Designed organizational diagrams and team maps with strong information architecture principles."
//             ]
//           },
//           {
//             name: "Agile Processes",
//             notableOutcomes: [
//               "Actively participated in daily standups, weekly retrospectives, and demo sessions.",
//               "Maintained tasks on a Kanban board, refined backlogs, and contributed to clear definitions of done.",
//               "Helped shape team agreements that fostered psychological safety, inclusion, and team cohesion.",
//               "Practiced sprint planning using estimation techniques and prioritized collaborative delivery."
//             ]
//           },
//           {
//             name: "Cloud Development",
//             notableOutcomes: [
//               "Prepared for the AWS Certified Cloud Practitioner exam by following internal study plans and labs.",
//               "Co-designed a cloud-focused curriculum with hands-on AWS practice environments.",
//               "Gained exposure to real-world deployment scenarios through internal capstone projects.",
//               "Explored cloud-native design principles including scalability, monitoring, and cost-awareness."
//             ]
//           }
//         ]
//       },
//       {
//         header: {
//           role: "Coding Expert at Outlier.ai", location: "Global", duration: { startDate: "Oct 2024", endDate: "Jan 2025" }, mode: "Remote",
//           roleDetails: {
//             company: 'outlier.ai',
//             role: 'Freelance Software Engineer'
//           }
//         },
//         tabs: 
//         [ 
//           {
//             name:"Prompt Engineering", 
//             notableOutcomes: [
//               "Designed high-quality prompts to guide large language models toward accurate, creative, or domain-specific responses.",
//               "Assessed AI outputs for factual accuracy, tone, coherence, and user intent alignment.",
//               "Conducted iterative prompt refinement to optimize model performance and reduce hallucinations.",
//               "Applied structured evaluation criteria to rank and critique diverse AI-generated completions."
//             ]
//           },
//           {
//             name: "Programming Expertise",
//             notableOutcomes: [
//               "Evaluated AI-generated code for correctness, efficiency, and best practices across Python, JavaScript, and Java.",
//               "Authored programming problems and detailed solutions to improve AI problem-solving capabilities.",
//               "Delivered technical feedback on model outputs with clear, pedagogical explanations.",
//               "Reviewed and ranked code responses to refine LLM performance in real-world coding scenarios."
//             ]
//           }
//         ]
//       },
//       {
//         header: {
//           role: "Freelancer Private Tutor", location: "King William's Town", duration: { startDate: "Jan 2017", endDate: "Nov 2019" }, mode: "Remote",
//           roleDetails: {
//             company: 'freelance',
//             role: 'Private Tutor'
//           }
//         },
//         tabs: 
//         [ 
//           {
//             name:"Responsibilities", 
//             notableOutcomes: [
//               "Tutored learners from Grades 6–12 in Math, Science, and English (for younger students) and adapted explanations and teaching style to match individual learning needs.",
//               "Designed personalized lesson plans targeting each student’s gaps and strengths and built strong rapport and trust to support consistent learning progress.",
//               "Simplified complex topics using visual aids, step-by-step examples, and adjusted session pacing and structure based on student feedback and performance"
//             ]
//           },
//           {
//             name: "Impact",
//             notableOutcomes: [
//               "Helped a Grade 10 student recover from a Grade 3 level in Math and Science.",
//               "Improved the student’s confidence, foundational skills, and GPA by 50%.",
//               "Supported her through to a Bachelor’s pass, demonstrating lasting growth.",
//               "Developed long-term academic strategies to ensure independent learning."
//             ]
//           }
//         ]
//       },
//       {
//         header: {
//           role: "NSC Marking Assistant", location: "King William's Town", duration: { startDate: "Nov 2017", endDate: "Jan 2019" }, mode: "Onsite",
//           roleDetails: {
//             company: 'Department of education',
//             role: 'NSC Marking Assistant'
//           }
//         },
//         tabs: 
//         [ 
//           {
//             name:"Responsibilities", 
//             notableOutcomes: [
//               "Tutored learners from Grades 6–12 in Math, Science, and English (for younger students) and adapted explanations and teaching style to match individual learning needs.",
//               "Designed personalized lesson plans targeting each student’s gaps and strengths and built strong rapport and trust to support consistent learning progress.",
//               "Simplified complex topics using visual aids, step-by-step examples, and adjusted session pacing and structure based on student feedback and performance"
//             ]
//           },
//           {
//             name: "Impact",
//             notableOutcomes: [
//               "Helped a Grade 10 student recover from a Grade 3 level in Math and Science.",
//               "Improved the student’s confidence, foundational skills, and GPA by 50%.",
//               "Supported her through to a Bachelor’s pass, demonstrating lasting growth.",
//               "Developed long-term academic strategies to ensure independent learning."
//             ]
//           }
//         ]
//       }
      
//  ];
 // Convert "Jan 2023" → Date object
 parseMonthYear(dateStr: string): number {
  if (!dateStr) return 0;
  return Date.parse(`01 ${dateStr}`); // adds a day to make it valid
}

get sorted(): ExperienceEntry[] {
  console.log("let's investigate", this.allWorkExperience);
  return this.allWorkExperience.sort((a, b) => {
    const tA = this.parseMonthYear(a.header.duration.startDate);
    const tB = this.parseMonthYear(b.header.duration.startDate);
    return tB - tA; // newest first
  });
}


}
