let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let marks = Number(input);
if(marks >= 35)
    console.log("Pass");
else
    console.log("Fail");
