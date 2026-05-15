let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let N = BigInt(input[0]);
let palindrome = N;
let reverse = "";
while (N != 0n) {
    reverse += N % 10n;
    N = N / 10n;
}
if (palindrome == reverse) {
    console.log("YES");
} else {
    console.log("NO");
}