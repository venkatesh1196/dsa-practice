let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let N = Number(input[0]);
let arr = []
let ans = 0;
for (let i = 1; i <= N; i++) {
    arr[i-1] = input[i];
}

for (let j = 0; j < N; j++) {
    ans += Number(arr[j]);
}
console.log(ans);