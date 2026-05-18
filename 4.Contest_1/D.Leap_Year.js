let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let N = Number(input[0]);
if (N % 100 == 0) {
    if (N % 400 == 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
} else if (N % 4 == 0) {
    console.log("Yes");
} else {
    console.log("No");
}