let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let n = BigInt(input[0]);
for (let i = 1; i <= n; i++) {
    let result = "";
    for (let j = 1; j <= i; j++) {
        result += i;
    }    
    console.log(result);
}