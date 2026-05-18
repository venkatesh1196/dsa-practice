let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let N = Number(input[0]);
let count = 0;
for (let i = 1; i <= N; i++) {
    if (18 % input[i] == 0 || input[i] % 45 == 0) {
        count++;
    }
}
console.log(count);