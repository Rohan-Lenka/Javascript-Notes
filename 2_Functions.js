// FUNCTIONS

// a normal fucntion in javascript
function sum(a, b) {
    return a + b;
}

// passing functions as arguments 
// in javascript, functions are treated as variables. So it is normal to pass functions as arguments
function sumPower(a, b, sumFunction, power) {  // Here sumFunction is a function treated as varibale 
                                               // & passed as an argument 
    let result = sumFunction(a, b);
    return result ** power; // Or use Math.pow(base, power)
} 

console.log(sumPower(2, 3, sum, 3)); // when function passed as an argument, dont write like this -> sum()

// Anonymous functions 
//                    -> function with no name
//                    -> used when you have to pass a function directly to another function

function greet(Name, sayhiFunc) {
    sayhiFunc(Name);
}

greet("Rohan", 
            function (Name) { // No name given to this function, This is basically the sayhiFunction
                console.log("Hi " + Name);
            }
     );

// ARROW FUNCTION 

// let <function_name> = ( <parameters> ) => {
//                                             // content 
//                                           }

let funcArrow = (a, b) => {
    return a + b;
}

// No argument type function example ->
let sayHi = () => {
    console.log("Hi !");
};

// one liner arrow functions can be written as ->  // Not imp
let oneLiner = (a, b) => a + b;

// Q ->
console.log(sayHi()); // 1st sayHi function executes then as sayHi return nothing, so logs out undefined // IMP
console.log(sayHi);   // logs out definition of the function passed 
// Both are correct in javascript

// HOISTING

/* 
    // function defined here

    // function called

    // function can be defined BELLOW as well

*/

/*
    this feature is called hoisting in javascript
    Only applies to functions
    
    Exception -> Arrow Functions
    Reason -> Arrow Functions are treated as variables
*/

console.log();
// Short Circuit evaluation -> 
console.log(true || false || false); // output is true no matter what u write after true 
// js is smart enough to know that once true is found in || statements, whole output os going to be true no matter what
console.log();

// Q -> 
function printTrue() {
    console.log("True");
    return true;
}

function printFalse() {
    console.log("False");
    return false;
}

printTrue() || printFalse();
console.log();
// Both functions wont execute coz the 1st function returns true in a || situation
// similarly for && situation 

// 2 use Cases ->
// 1)
function printName(Name) {
    Name = Name || "default";  // same as if name is === null(no arguement in the function), name = "default"
    console.log(Name);
}
printName(); // No arguement is passed, so prints default
console.log();

// 2)
const person = {
    address : {
        street : "md vihar Road"
    }
};

console.log(person && person.address && person.address.street); // If one of them is false, rest of the execution stops 
console.log();