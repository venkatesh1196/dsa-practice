let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let A = Number(input[0]);
let B = Number(input[1]);
function hcf(a, b) {
    while (b != 0) {
        let remainder = a % b;
        a = b;
        b = remainder;
    }      
    return a;
}
console.log(hcf(A, B));