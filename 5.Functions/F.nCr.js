let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let n = Number(input[0]);
let r = Number(input[1]);
function factorial (x) {
    if (x === 0) {
        return 1;
    }
    let funFact = 1;
    for (let i = 1; i <= x; i++) {
        funFact *= i;
    }
        return funFact;
}
function nCr(n, r) {
    let diff = 0;
    let result = 0;
    let fact = 0;
    let nfact = 1;
    let rfact = 1;
    let nrfact = 1;
    diff = n-r;
    
    nfact = factorial(n);
    rfact = factorial(r);
    nrfact = factorial(diff);
    
    fact = rfact * (nrfact)
    result = Math.floor(nfact / fact);
    console.log(result);
}
nCr(n, r);