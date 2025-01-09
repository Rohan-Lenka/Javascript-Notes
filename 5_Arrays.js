// declare an array => always use const
const arr1 = [1, 3, 5, 7];

// In js, Arrays can have diff types of data
const arr2 = [1, true, "Hello", null, undefined];

// some imp functions of arrays in js =>
arr1.pop(); 
arr1.push(9); 
let len = arr1.length;
console.log(arr1);

// NESTED ARRAYS
const nestedArray = [
    1,
    2,
    [5,6,7],
    [9,10,11,12,"hi"],
    ["bye",true]
];
console.log(nestedArray); 
console.log(nestedArray.length); // 5
console.log();

// ARRAY METHODS
// Method is a function which is defined inside of an object

const arr = [1, 3, 7, 9, 11];
// 1)
arr.forEach((el, ind) => {   // Always 1st el, then write index, or only el(preferable) 
    console.log(ind + " -> " + el); // Can only print things 
});
console.log();

// 2)
let newArr = arr.map(el => { // Same as forEach, but here u can return values
    return el * 2; 
});
console.log(newArr);
console.log();

// 3)
newArr = arr.filter(el => { // return type is boolean. Selects those elements which yield true. 
    return el > 6;         // Can make a newarray using this method
});
console.log(newArr);
console.log();

// 4)
const singleEl = arr.find(el => { // When the condition satisfies, it breaks and selects  
    return el > 8;                // that particular element only. Only capable of making a single variable
});
console.log(singleEl);
console.log();

// 5)
let isTrue = arr.some(el => {
    return el > 5; // Checks if ATLEAST ONE of the elements of the array satisfies this condition
});                // if Yes, then isTrue = true, else false
console.log(isTrue);
console.log();

// 6)
isTrue = arr.every(el => {
    return el < 10; // Checks if EVERY elements of the array satisfies this condition
});                // if Yes, then isTrue = true, else false
console.log(isTrue);
console.log();

// 7)
let sumOfElements = arr.reduce((el, sum) => {
    return sum + el;
}, 0); // 0 or the 2nd paramter is the default value of sum
console.log(sumOfElements);
console.log();

// 8)
let doesInclude = arr.includes(12); // false
doesInclude = arr.includes(11); // true
console.log();

// Q ->
const items = [
  { price : 12 },  
  { price : 8 },  
  { price : 20 },  
  { price : 22 },  
  { price : 7 }  
];
// add the prices of all items using reduce method