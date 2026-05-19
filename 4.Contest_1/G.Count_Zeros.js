let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let N = BigInt(input[0]);
let count = 0;
if (N != 0) {
    while (N != 0n) {
    if (N % 10n == 0n) {
        count++;
    }
    N = N / 10n;
    }
} else if (N == 0) {
    count++;
}
console.log(count);