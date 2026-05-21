let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let N = Number(input[0]);
function factorial(N) {
    let result = 1;
    for (let i = 1; i <= N; i++) {
        result *= i;
    }
    console.log(result);
}
factorial(N);
