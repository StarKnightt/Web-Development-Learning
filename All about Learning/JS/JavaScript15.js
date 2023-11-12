// Printing the Math object
let m = Math;
console.log(m);

// Printing the constants from Math Object
console.log("The Value of Math.E is ", Math.E);
console.log("The Value of Math.PI is ", Math.PI);
console.log("The Value of Math.LN2 is ", Math.LN2);
console.log("The Value of SQRT1_2 is ",Math.SQRT1_2);
console.log("The Value of SQRT2 is ",Math.SQRT2);
console.log("The Value of Math.LOG10E is ", Math.LOG10E);

// Printing the funcitons form math object
let a = 34.64534; 
let b = 89;

console.log("The value of a and b is ", a, b);
console.log("The value of a and b rounded is ", Math.round(a), Math.round(b));

console.log("3 raised to the power of 2 is ", Math.pow(3, 2));
console.log("3 raised to the power of 2 is ", Math.pow(2, 12));

console.log("Square root of 36 is ", Math.sqrt(36));
console.log("Square root of 64 is ", Math.sqrt(64));
console.log("Square root of 50 is ", Math.sqrt(50));

// Ceil and floor
console.log("5.8 rounded up to nearest integer is ", Math.ceil(5.8));
console.log("5.8 rounded down to nearest integer is ", Math.floor(5.8));

// Abs function
console.log("Absolute value of 5.6 is ", Math.abs(5.66));
console.log("Absolute value of 5.6 is ", Math.abs(-5.66));

// Trigonometric Function
console.log("The Value of sin(pi) is ", Math.sin(Math.PI));
console.log("The Value of sin(pi/2) is ", Math.sin(Math.PI/2));
console.log("The Value of cos(pi) is ", Math.cos(Math.PI));
console.log("The Value of tan(pi) is ", Math.tan(Math.PI));
console.log("The Value of cot(pi) is ", 1 / Math.tan(Math.PI));  // Calculate cot as 1 / tan
console.log("The Value of sec(pi) is ", 1 / Math.cos(Math.PI));  // Calculate sec as 1 / cos
console.log("The Value of cosec(pi) is ", 1 / Math.sin(Math.PI));  // Calculate cosec as 1 / sin

// Min and Max Functions
console.log("Mininmum value of 4, 5, 6 is ", Math.min(4,5,6));
console.log("Mininmum value of 14, 5, 16 is ", Math.min(14,5,16));

console.log("Maximum value of 14, 5, 16 is ", Math.max(14,5,16));
console.log("Mininmum value of 14, 5, 16 is ", Math.max(14,5,16));

// log functions : returns natural logarithm of number
console.log("Logarithm of 2 is ", Math.log(34));

// Generating random Number
let r = Math.random();
console.log("Random number is ", r);
// Random number b/w (a,b) = a + (b-a)*Math.random()
let Num1 = 1;
let Num2 = 100;
// let RandomNumbers = Num1 + (Num2-Num1)*Math.random();
// console.log("Random numbers between 1 and 100 is ", RandomNumbers);

// OutPut in round format
let RandomNumbers = Num1 + Math.round( (Num2-Num1)*Math.random());
console.log("Random numbers between 1 and 100 is ", RandomNumbers);

