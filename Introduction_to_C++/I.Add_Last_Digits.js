let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let N = Number(input[0]);
let M = Number(input[1]);
console.log((N % 10) + (M % 10));