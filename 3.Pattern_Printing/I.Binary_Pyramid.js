let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let n = Number(input[0]);
let binary = 0;
for (let i = 1; i <= n; i++) {
    let result = "";
    if (i % 2 == 0) {
        binary = 1;
    } else {
        binary = 0;
    }
    for (let j = 1; j <= i; j++) {
        result += binary;
        if (binary == 1) {
            binary = 0;
        } else {
            binary = 1;
        }
    }    

    console.log(result);
}