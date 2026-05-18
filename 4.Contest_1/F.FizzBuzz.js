let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let N = Number(input[0]);
if (N % 3 == 0 && N % 5 == 0) {
    console.log("FizzBuzz");
} else if (N % 3 == 0) {
    console.log("Fizz");
} else if (N % 5 == 0) {
    console.log("Buzz");
} else {
    console.log(N);
}