let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let n = Number(input[0]);
for (let i = 1; i <= n; i++) {
    let result = "";
    for (let j = 1; j <= i; j++) {
        if (i == 1 || j == 1 || j ==i) {
        result += "* ";
        } else {
            result += "  ";
        }
    }    
    console.log(result);
}
for (let i = 1; i <= n; i++) {
    let result = "";
    for (let j = 1; j <= n-i; j++) {
       if (j == 1 || j == n-i) {
        result += "* ";
        } else {
            result += "  ";
        }
    }     
    console.log(result);
}