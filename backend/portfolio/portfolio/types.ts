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
};

export type Education = {
    institution: "Wynberg Girls' High School" | "University of the Free State" | "WeThinkCode_",
    qualification: "National Senior Certificate" | "BSc Physics & Astrophysics" | "Systems Development NQF 5",
    duration: {start: string, end: string},
    grade: "A-" | "A- with 5 distinctions" | "Incomplete",
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
