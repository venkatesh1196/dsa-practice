let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let marks = Number(input);
if (marks > 90) {
    console.log("Excellent");
} else if (marks > 80 && marks <= 90) {
    console.log("Good");
} else if (marks > 70 && marks <= 80) {
    console.log("Fair");
} else if (marks > 60 && marks <= 70) {
    console.log("Meets Expectations");
} else {
    console.log("Below Par");
}