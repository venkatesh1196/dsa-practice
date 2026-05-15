/*
note1: //* / and % opeartors:
console.log(1234 / 10); // removes the last digit
console.log(1234 % 10); // gives the last digit
console.log(10 / 2); // divide operator -> gives quotient
console.log(10 % 2); //remainder or modulo operator ->gives remainder
console.log(10/3);              // 3.3333333333..
console.log(10%3);              // 1
console.log(Math.floor(10/3));  // 3 (lower value) 
console.log(Math.ceil(10/3));   // 4 (upper value)

note2: //*BigInt: 
will do "Math.floor" automatically.
input: 010 "BigInt(010)->10n" BigInt removes leading 0's

note3: //* ending 0's
result += N % 10; // this will keep ending zeros (result = ""; // "" is not a good practice)
result = (result * 10) + (N % 10); // this will remove ending zeros 
