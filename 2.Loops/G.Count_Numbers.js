let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let N = Number(input[0]);
let positive = 0;
let negative = 0;
let even = 0;
let odd = 0;
for (let i = 1; i <= N; i++) {
    let x = Number(input[i])
    if (x > 0) {
        positive++;
    } else if (x < 0) {
        negative++;
    } if (x % 2 == 0) {
        even++;
    } else {
        odd++;
    }
}
console.log(`${positive}\n${negative}\n${even}\n${odd}`);