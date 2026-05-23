let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let N = Number(input[0]);
let arr = [];
for (let i = 1; i <= N; i++) {
    arr[i-1] = input[i];
}

let minValue = Number(arr[0]);
let minPos = 1;
for (let j = 1; j < N; j++) {
    let currentVal = Number(arr[j]);
    if (minValue > currentVal) {
        minValue = currentVal;
        minPos = j+1;
    }
}
console.log(minValue, minPos);