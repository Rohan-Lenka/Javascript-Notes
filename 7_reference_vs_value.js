let a = 10;
let b = a;
b++;
// Only b changes, not a

// IN CASE OF ARRAYS
const c = [1, 2];
const d = c;
d.push(3)
console.log("c = " + JSON.stringify(c));
console.log("d = " + JSON.stringify(d));

/* - When an array is made, the variable contains the address(reference) of the array
     i.e the address of the 1st element of the array 
   - So, c actually stores the reference lets say 0x01
   - When d is made and d = c is done, d also stores the reference to the same array
   - Any changes to d, also changes c 
   - But if ->
     const c = [1, 2]; // 0x01
     const d = [1, 2]; // 0x02
     same valued arrays but diff. references(addresses)
   */ 

// V.IMP ->
const arr1 = [10, 20]; // 0x01
const arr2 = [10, 20]; // 0x02
console.log(arr1 === arr2); // u can use == too
// logs out false. Reason => We're actually comparing their REFERENCES NOT VALUES.

// Same goes for objects too
const ob1 = {
    Name : "Rohan",
    Age : 20
}; // 0x01

const ob2 = ob1; // Also 0x01
ob2.city = "Cuttack";
console.log(ob1);

// Why changes to any array or object possible even when declared using const ? =>  // IMP
    /*
    We are not actually changing what is stored in them i.e the reference, we are just modifying the content
    stored in that reference.
    Thats y, something like array.push(el) or obj.name = "Mohan" works coz reference to the array / obj remains same  
    */ 

// Functions ->
// In functions, arrays & objects are passed by reference

// Q ->
const array = [2, 4, 6];
let el = 6;
function modify(array, el) {
    el = el + 2;
    array.push(el);
}
modify(array, el);
console.log(array); // passed by ref. So actual changes
console.log(el); // passed by value / a copy is passed, so no changes




