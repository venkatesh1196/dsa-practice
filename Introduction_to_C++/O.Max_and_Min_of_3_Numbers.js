let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let A = Number(input[0]);
let B = Number(input[1]);
let C = Number(input[2]);
if (A < B && A < C) {
    if (B < C) {
        console.log(`Min = ${A}\nMax = ${C}`);
    } else {
        console.log(`Min = ${A}\nMax = ${B}`);
    }
}
    else if (B < A && B < C) {
        if (A < C) {
        console.log(`Min = ${B}\nMax = ${C}`);
    } else {
        console.log(`Min = ${B}\nMax = ${A}`);
    }
}
else { 
    if (A < B) {
        console.log(`Min = ${C}\nMax = ${B}`);
    } else {
        console.log(`Min = ${C}\nMax = ${A}`);
    }
}
