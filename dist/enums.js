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
console.log(res);
