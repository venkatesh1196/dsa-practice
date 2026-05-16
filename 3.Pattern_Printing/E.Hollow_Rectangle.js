let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let n = BigInt(input[0]);
let m = BigInt(input[1]);
for (let i = 1n; i <= n ; i++) {
    let result = "";
    for (let j = 1n; j <= m; j++) {
        if (i == 1 || i == n || j ==1 || j == m) {
            result += "*";
        } else {
            result += " ";
        }
    }
    console.log(result);
}