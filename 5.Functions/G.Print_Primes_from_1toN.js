let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let N = Number(input[0]);
function isPrime(N) {
    if (N <= 1) {
        return false;
    }
    if (N === 2) {
        return true;
    }
    if (N % 2 == 0) {
        return false;
    }
    for (let i = 3; i * i <= N; i += 2) {
        if (N % i == 0) {
            return false;
        }
    }
    return true;
}
let result = "";
for (let i = 1; i <= N; i++) {
    if (isPrime(i)) {
        result += `${i} `;
    }
}
console.log(result);