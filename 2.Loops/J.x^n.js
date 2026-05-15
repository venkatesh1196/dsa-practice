let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let x = BigInt(input[0]);
let n = BigInt(input[1]);
let result = 1n;
if (n == 0n) {
        console.log(String(result));
} else {
    for (let i = 1n; i <= n; i++) {
        result *= x;
    }
    console.log(String(result));
}