let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let X = Number(input[0]);
let Y = Number(input[1]);
if (X == 0 && Y == 0) {
    console.log("Origin");
} else if (Y == 0 && X ==! 0) {
    console.log("X axis");
} else if (X == 0 && Y ==! 0) {
    console.log("Y axis");
} else if (X > 0 && Y > 0) {
    console.log("1st Quadrant");
} else if (X < 0 && Y > 0) {
    console.log("2nd Quadrant");
}else if (X < 0 && Y < 0) {
    console.log("3rd Quadrant");
}else if (X > 0 && Y < 0) {
    console.log("4th Quadrant");
}