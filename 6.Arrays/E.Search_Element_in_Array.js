let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let N = Number(input[0]);
let X = Number(input[1]);
let arr = [];
for (let i = 2; i <= N+1; i++) {
    arr[i-2] = input[i];
}
let found = false;
for (let i = 0; i < N; i++) {
    if (arr[i] == X) {
        found = true;
        break;
    }
}
if (found) {
    console.log("YES");
} else {
    console.log("NO");
}