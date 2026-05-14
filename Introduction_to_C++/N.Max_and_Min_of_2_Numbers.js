let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let A = Number(input[0]);
let B = Number(input[1]);
if(A < B)
    console.log(`Min = ${A}\nMax = ${B}`);
else
    console.log(`Min = ${B}\nMax = ${A}`);