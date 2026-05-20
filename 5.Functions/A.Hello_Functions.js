let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let N = Number(input[0]);
function hello(N) {
    for (let i = 1; i <= N; i++) {
        console.log("I am learning functions");        
    }
}
hello(N);