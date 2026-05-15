let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let N = Number(input);
function factorial(N) {
    let fact = 1;
    for (let i = 1; i <= N; i++) {
        fact *= i;
    }
    console.log(fact);
}
factorial(N);
