let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let N = Number(input[0]);
let temp = 0;
for (let i = 1; i <= 1; i++) {
    N = Math.floor(N / 10);
    console.log(temp = N % 10);
}