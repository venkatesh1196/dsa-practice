let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let N = BigInt(input[0]);
let M = BigInt(input[1]);
if(N * N == M)
    console.log("Yes");
else 
    console.log("No");