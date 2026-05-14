let fs = require('fs');
let  N = fs.readFileSync(0, 'utf8').trim();
for(let i = 1; i <= 10; i++){
    console.log(`${N} * ${i} = ${N*i}`);
}
