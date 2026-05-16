let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let n = Number(input[0]);
for (let i = 1; i <= n; i++) {
    let result = "";
    for (let j = 1; j <= i-1; j++) {
        result += " ";
    }    
    for (let k = i; k <= n; k++) {
        if (k == n ) {
        result += "*";
        } else {
            if (k == i || i == 1) {
                result += "* "
            } else {
                result += "  ";
            }
        }
    }
    console.log(result);
}