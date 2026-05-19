let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let N = Number(input[0]);
for (let i = 1; i <= N-1; i++) {
    let result = "";
    for (let j = 1; j < i; j++) {
        result += " ";
    }
    for (let k = 1; k <= i; k++) {
        if (k == 1) {
            result += ">";
        } else if (k == i) {
            result += " >"
        } else {
            result += "  ";
        }
    }
    console.log(result);
}

for (let i = N; i >= 1; i--) {
    let result = "";
    for (let j = 1; j < i; j++) {
        result += " ";
    }
    for (let k = 1; k <= i; k++) {
        if (k == 1) {
            result += ">";
        } else if (k == i) {
            result += " >"
        } else {
            result += "  ";
        }
    }
    console.log(result);
}

