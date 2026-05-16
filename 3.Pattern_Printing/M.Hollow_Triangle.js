let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let n = Number(input[0]);
for (let i = 1; i <= n; i++) {
    let result = "";
    for (let j = 1; j <= n-i; j++){
        result += " "
    }
    for (let k = 1; k <= i; k++) {
        if (k == i) {
        result += "*";
        } else {
            if (k == 1 || i == n) {
                result += "* ";
            } else {
                result += "  ";
            }
        }
    }
    console.log(result);
}
