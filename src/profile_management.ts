// user profile management
interface User {
    id: number;
    username: string;
    email: string;
}

interface Author extends User {
    bio: string;
    posts: string[];
}

type Status = "active" | "deactive" | "banned";

const author01: Author = {
    id: 1,
    username: 'Walidur Tanjim',
    email: "walidurtanjim@gmail.com",
    bio: "MERN Stack Web Developer",
    posts: ['E Commerce', 'Portfolio', 'Blog', 'User Management', 'Forum']
}

const accountStatus: Status = "active";