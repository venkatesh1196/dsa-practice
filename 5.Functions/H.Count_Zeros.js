let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let N = BigInt(input[0]);
let count = 0;
function countZeros (N) {
    if (N === 0n) {
    count++;
    }
    while (N != 0n) {
        let last = 0;
        last = N % 10n;
        if (last == 0) {
            count++;
        }
        N = N / 10n;
    }
    console.log(count);
}
countZeros(N);