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