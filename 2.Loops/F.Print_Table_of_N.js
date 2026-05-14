let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let N = Number(input);
for (let i = 1; i <= 10; i++) {
    console.log(`${N} * ${i} = ${N * i}`);    
}