export type Project = {
    name: "Minesweeper" | "Burn after reading" | "Bhala Edolweni",
    description: string,
    tags: {tag:string, colour: "dark" | "green" | "mustard" | "blue" | "pink" | "orange"}[],
    imgSrc: string
    duration: {startDate:string, endDate:string}
}
