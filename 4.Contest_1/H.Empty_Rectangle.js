let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let N = Number(input[0]);
let M = Number(input[1]);
for (let i = 1; i <= N; i++) {
    let result = "";
    for (let j = 1; j <= M; j++) {
        if (i == 1 || i == N || j == 1 || j == M) {
            result += "^";
        } else {
            result += " ";
        }
    }
    console.log(result);
}