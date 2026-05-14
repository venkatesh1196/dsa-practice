let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let N = Number(input);
let result ="";
for (let i = N; i >= 1; i--) {
    result += i + " ";
}
console.log(result);

//* better approach (takes less time & less memory)
// const fs = require('fs');
// const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
// const n = parseInt(input);
// let result = [];
// for(let i = n; i >= 1; i--){
//     result.push(i);
// }
//     console.log(result.join(" "));