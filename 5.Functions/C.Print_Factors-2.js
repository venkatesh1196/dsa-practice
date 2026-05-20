let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let N = Number(input[0]);
let result = "";
for (let i = N; i >= 1; i--) {
    if (N % i == 0) {
        result += `${i} `;
    }    
}
console.log(result);