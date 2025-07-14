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
console.log(res);