let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let N = Number(input[0]);
let array = [];
let result = [];
for (let i = 1; i <= N; i++) {
    array[i-1] = input[i];
}
let k = 0;
for (let j = N; j >= 1; j--) {
    result[k] = array[j-1];
    k++;
}
//*method1
console.log(result.join(" "));

//*method2
// let ans = "";
// for (let i = 0; i < N; i++) {
//     ans += result[i] + " ";
// }
// console.log(ans.trim());