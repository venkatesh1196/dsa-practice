let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let N = Number(input[0]);
let result = 0;
if (N == 0) {
    console.log(0);
} else {
    while (N != 0) {
        // result += N % 10; // this will keep ending zeros (result = "")
        result = (result * 10) + (N % 10); // this will remove ending zeros
        N = Math.floor(N / 10);
    }
    console.log(result);
}
