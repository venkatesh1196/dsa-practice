let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let n = Number(input[0]);
let m = Number(input[1]);
for (let i = 1; i <= n; i++) {
    let result = "";
    for (let i = 1; i <= m; i++) {
        result += "*";
    }    
        console.log(result);
}