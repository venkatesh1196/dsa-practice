let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let N = BigInt(input[0]);
let sum = 0n;
while (N != 0n) {
    sum += (N%10n);
    N = N/10n;
}
console.log(String(sum));