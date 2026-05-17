let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let N = input[0];
let vowels = ['a', 'e', 'i', 'o', 'u'];
let count = 0;
for (let i = 0; i <= 4; i++) {
    if (vowels[i].charCodeAt(0) == N.charCodeAt(0)) {
        count++;
    }
}
if (count == 1) {
    console.log("YES");
} else {
    console.log("NO");
}