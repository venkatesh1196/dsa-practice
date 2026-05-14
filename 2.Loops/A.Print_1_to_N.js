let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let n = BigInt(input);
for (let i = 1; i <= n; i++) {
    console.log(i);    
}