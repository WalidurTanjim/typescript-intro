"use strict";
// [][][] enum project
var PostStatus;
(function (PostStatus) {
    PostStatus["Draft"] = "DRAFT";
    PostStatus["Published"] = "PUBLISHED";
    PostStatus["Archived"] = "ARCHIVED";
})(PostStatus || (PostStatus = {}));
const post01 = {
    title: "Intro of TypeScript",
    content: "Enums are very powerfull.",
    status: PostStatus.Archived
};
const post02 = {
    title: "Intro of TypeScript",
    content: "Enums are very powerfull.",
    status: PostStatus.Published
};
// console.log(post01.status);
// console.log(post02.status);
