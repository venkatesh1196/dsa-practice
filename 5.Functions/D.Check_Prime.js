let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let N = Number(input[0]);
// let count = 0;
// function isPrime(N) {
//     for (let i = 1; i <= N; i++) {
//     if (N % i == 0) {
//         count++;
//     }    
// }
// if (N == 1 || count >= 3) {
//     console.log("Not Prime");
// } else {
//     console.log("Prime");
// }    
// }
// isPrime(N);

//* method 2

function isPrime1(N) {
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
if (isPrime1(N)) {
    console.log("Prime");
} else {
    console.log("Not Prime");
}