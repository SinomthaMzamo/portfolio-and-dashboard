export type HeaderInfo = {
    role: string,
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
