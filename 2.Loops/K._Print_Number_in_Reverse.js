let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let N = BigInt(input[0]);
let result = "";
if (N === 0n) {
    result = "0";
} else {
    while (N != 0n) {
    result += N % 10n;
    N = N/10n;
}
}
console.log(result);