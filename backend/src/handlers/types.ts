import { STACK_NAME } from "./constants.ts";

export type Tag = {
    tag: string;
    colour: "blue" | "dark" | "pink" | "green" | "mustard";
};
  
export type BlogPost = {
    title: string;
    introduction: string;
    imgSrc:string;
    tags: Tag[];
    readTime: number;
    datePublished: Date;
    url?:string;
};

export type Education = {
    institution: "Wynberg Girls' High School" | "University of the Free State" | "WeThinkCode_",
    qualification: "National Senior Certificate" | "BSc Physics & Astrophysics" | "Systems Development NQF 5",
    duration: {start: string, end: string},
    grade: "A-" | "A- with 5 distinctions" | "Incomplete" | "In Progress",
    skills: Skill[],
    imgSrc: string
}

export type Skill = {
    skill: string,
    colour: "pink" | "dark" | "green" | "blue" | "gray" | "mustard"
}

export type HeaderInfo = {
    role:string,
    roleDetails: {company:string, role:string},
    location: "Cape Town" | "Durban" | "King William's Town" | "Global"
    duration: {start: string, end: string},
    mode: "Onsite" | "Hybrid" | "Remote",
}

export type CoreAspectOfExperience = {
    name: string,
    notableOutcomes: string[]
}

export type ExperienceEntry = {
    header: HeaderInfo,
    tabs: CoreAspectOfExperience[], 
}

export interface Experience {
    header: HeaderInfo,
    tabs: CoreAspectOfExperience[],
}

export type Project = {
    name: "Minesweeper" | "Burn after reading" | "Bhala Edolweni",
    description: string,
    tags: {tag:string, colour: "dark" | "green" | "mustard" | "blue" | "pink" | "orange"}[],
    imgSrc: string
}

export enum TableName {
  EXPERIENCES = `${STACK_NAME}-experiences`,
  EDUCATION = `${STACK_NAME}-education`,
  PROJECTS = `${STACK_NAME}-projects`,
  BLOGS = `${STACK_NAME}-blogs`,
  MESSAGES = `${STACK_NAME}-messages`
}

export type Response = {
    statusCode: number,
    headers: {
        "Access-Control-Allow-Origin": "*", // ✅ CORS header
        "Access-Control-Allow-Headers": "*", // optional, useful if you're sending custom headers
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS", // optional, helps with preflight
    },
    body: string
};