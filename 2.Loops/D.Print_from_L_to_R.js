let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let L = Number(input[0]);
let R = Number(input[1]);
let result = [];
for (let i = L; i <= R; i++) {
    result.push(i);
}
console.log(result.join(" "));