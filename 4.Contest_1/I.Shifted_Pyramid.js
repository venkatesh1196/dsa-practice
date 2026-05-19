let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let N = Number(input[0]);
for (let i = 1; i <= N; i++) {
    let result = "";
    for (let j = 1; j < i; j++) {
        result += " ";
    }
    for (let k = 1; k <= i; k++) {
        result += "x";
    }
    console.log(result);
}