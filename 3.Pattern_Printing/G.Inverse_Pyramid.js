let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let n = BigInt(input[0]);
for (let i = 1n; i <= n; i++) {
    let result = "";
    for (let j = 0n; j <= n-i; j++) {
        result += "*";
    }    
    console.log(result);
}