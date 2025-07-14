// [][][] enum project


enum PostStatus {
    Draft = "DRAFT",
    Published = "PUBLISHED",
    Archived = "ARCHIVED"
}

type PostType = {
    title: string;
    content: string;
    status: PostStatus
}

const post01: PostType = {
    title: "Intro of TypeScript",
    content: "Enums are very powerfull.",
    status: PostStatus.Archived
}

const post02: PostType = {
    title: "Intro of TypeScript",
    content: "Enums are very powerfull.",
    status: PostStatus.Published
}
// console.log(post01.status);
// console.log(post02.status);