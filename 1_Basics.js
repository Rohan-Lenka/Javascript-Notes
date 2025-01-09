// DATA TYPES IN JAVASCRIPT 

// number ->
let int = 1;
let float = 1.1;
let double = 1.01928343498;
let long = 99999999999;

console.log(typeof int + " " + typeof float + " " + typeof double + " " + typeof long); // typeof function to print the type of the data
// all are number data type in javascript

// string ->
let myName = "Rohan";
//Or
let myName2 = 'Lenka'; // special string notation in javascript
// Or
let myName3 = `Rohan`; // Symbol is called back-ticks

let quotation = 'This is an "Apple"'; 
// Or
quotation = "This is an \"Apple\""; // your default method to use escape operator

// Special type of Cascading using back-ticks ->
let str1 = "The";
let str2 = "answer";
console.log(`${str1} ${str2} is ${2 + 5}`); // This type of writing inside console.log() is more convinient.
                                            // No need to worry about the use of plus symbols to cascade 
                                            // This is called string template literal 


// boolean ->
let bool = true;
bool = false;

// null and undefined ->
let a;
let b = undefined;
// Both are undefined

let Null_data = null;
// null data type
console.log(typeof Null_data); // null is actually an object while undefined is a data type in javascript

console.log(Null_data == a); // true
// also a == b, Null_data == Null_data gives true

// EXPLICIT TYPE COERCION =>
    // kind of type casting

let num = 1;
let integer = parseInt(num);
let Float = parseFloat(num);
let Str = num.toString();

// IMPLICIT TYPE COERCION =>
    // type coercion automatically done by js

let x = 1;
let y = "1";
console.log(x + y); // converts x => int to string 
console.log(x - y); // converts y => string to int

// Q ->

let var1 = 1;
let var2 = "Hello";
console.log(var1 + var2);
console.log(var1 - var2);

// == VS ===
    // == only compares value, ignores type, does implicit type coercion before comparing
    // === compares both type and value
    
console.log(x == y); // true
console.log(x === y); // false

// == -> !=
// === -> !==

// Q ->

console.log(null == undefined);
console.log(null === undefined);

// REMEMBER =>
    // always use === but in case of comparing for NULL / undefined use == because they are the same thing

// WHAT IS NaN
    // not a number
    // it is a type of number

let a1 = "asdsf";
let b1 = parseInt(a1);
console.log(b1); // logs out NaN coz the string a1 can never be converted to a number

// Weird nature of NaN => // IMP
console.log(b1 == NaN);
console.log(b1 === NaN);
// Both logs out false // IMP

// Instead use this isNaN() function to check if a variable is a NaN or not;
console.log(isNaN(b1));

// Q ->
console.log(typeof NaN);