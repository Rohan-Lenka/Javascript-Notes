// always use let over var. Reasons =>

// 1) var can be accessed from anywhere, doesn't follow the scoping rules. Ex -> 

{
    {
        var a = 1;
    }
}
console.log(a);

// 2) Can be hoisted. Ex ->

console.log(b);

var b = 2;

console.log(b);

// This actually gets redefined as =>
/*

var b = undefined; // var b gets hoisted to the top

console.log(b);

b = 2;

console.log(b);

*/

// 3) var can be declared multiple times for the same variable. Ex ->

var c = 3;
var c = true;
var c = "string";

console.log(c);