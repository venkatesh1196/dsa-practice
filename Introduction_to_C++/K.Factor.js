let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let N = Number(input[0]);
let F = Number(input[1]);
if(N % F == 0)
    console.log("Yes");
else
    console.log("No");