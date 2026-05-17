let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let N = Number(input[0]);
for (let i = 1; i <= N; i++) {
    console.log("Hello Codeforces",i);
} 