let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let n = Number(input[0]);
for (let i = 1; i <= n; i++) {
    let result = "";
    for (let j = i; j <= n; j++) {
        result += "*";
    }
    for (k = 1; k <= i; k++) {
        result += " ";
    }
    for (x = 2; x <= i; x++) {
        result += " ";
    }
    for (y = i; y <= n; y++) {
        result += "*";
    }
    console.log(result);
}
for (let i = 2; i <= n; i++) {
    let result = "";
    for (let j = 1; j <= i; j++) {
        result += "*";
    }
    for (k = 1; k <= n-i; k++) {
        result += " ";
    }
    for (x = 1; x <= n-i+1; x++) {
        result += " ";
    }
    for (y = 1; y <= i; y++) {
        result += "*";
    }
    console.log(result);
}