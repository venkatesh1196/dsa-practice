let fs = require("fs");
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let length = Number(input[0]);
let breadth = Number(input[1]);
console.log("Area = ", length * breadth);
console.log("Perimeter = ", 2 * (length + breadth));
