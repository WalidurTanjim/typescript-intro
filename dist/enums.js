"use strict";
// [][][] Numeric & String enums
// Numeric enums (default enum)
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let dir = Direction.Down;
// console.log(dir);
var Role;
(function (Role) {
    Role[Role["User"] = 1] = "User";
    Role[Role["Instructor"] = 2] = "Instructor";
    Role[Role["Admin"] = 3] = "Admin";
    Role[Role["SuperAdmin"] = 4] = "SuperAdmin";
})(Role || (Role = {}));
// string enum
var WebStatus;
(function (WebStatus) {
    WebStatus["Success"] = "SUCCESS";
    WebStatus["Error"] = "ERROR";
    WebStatus["Pending"] = "PENDING";
})(WebStatus || (WebStatus = {}));
const res = WebStatus.Error;
const s1 = 0 /* Size.Small */;
// console.log(s1);
// [][][] use-case
// 1: Direction & Position
// 2: Role or Permission
// 3: Status code or API call: enum HttpStatus {OK = 200, NotFound = 404}
// 4: Days of week or months: enum Days {Sum, Mon, Tue, Wed, Thu, Fri, Sat}
// 5: Toggle state or modes: enum Mode {Dark, Light}
