// [][][] Numeric & String enums

// Numeric enums (default enum)
enum Direction {
    Up,
    Down,
    Left,
    Right
}

let dir: Direction = Direction.Down;
// console.log(dir);

enum Role {
    User = 1,
    Instructor,
    Admin,
    SuperAdmin
}

// string enum
enum WebStatus {
    Success = "SUCCESS",
    Error = "ERROR",
    Pending = "PENDING"
}
const res = WebStatus.Error;
// console.log(res);









// [][][] const enums
const enum Size {
    Small,
    Medium,
    Large,
    ExtraLarge
}
const s1 = Size.Small;
// console.log(s1);


// [][][] use-case
// 1: Direction & Position
// 2: Role or Permission
// 3: Status code or API call: enum HttpStatus {OK = 200, NotFound = 404}
// 4: Days of week or months: enum Days {Sum, Mon, Tue, Wed, Thu, Fri, Sat}
// 5: Toggle state or modes: enum Mode {Dark, Light}