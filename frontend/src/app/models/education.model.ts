export type Education = {
    institution: "Wynberg Girls' High School" | "University of the Free State" | "WeThinkCode_",
    qualification: "National Senior Certificate" | "BSc Physics & Astrophysics" | "Systems Development NQF 5",
    duration: {start: string, end: string},
    grade: "A-" | "A- with 5 distinctions" | "Incomplete",
    skills: Skill[]
}

export type Skill = {
    skill: string,
    colour: "pink" | "dark" | "green" | "blue" | "gray" | "mustard"
}