// let fs = require('fs');
// let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
// let N = Number(input);
// let result ="";
// for (let i = 1; i <= N; i++) {
//     if (i % 2 == 0) {
//     result += i + " ";
//     }
// }
// console.log(result);

//* another approach
let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let N = Number(input);
let result =[];
for (let i = 1; i <= N; i++) {
    if (i % 2 == 0) {
    result.push(i);
    }
}
console.log(result.join(" "));