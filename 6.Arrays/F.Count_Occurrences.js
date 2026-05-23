let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let N = Number(input[0]);
let X = Number(input[1]);
let arr = [];
for (let i = 2; i <= N+1; i++) {
    arr[i-2] = input[i];
}
let check = 0;
for (let i = 0; i < N; i++) {
    if (arr[i] == X) {
        check++;
    }
}
console.log(check);
