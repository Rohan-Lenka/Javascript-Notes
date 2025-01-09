// How to traverse the whole DOM (Document Object Model) from any place ->
/*

.children[i]    // grabs ith child 
.nextElementSibling    // grabs next html element 
.previousElementSibling    // grabs prev html element 
.closest("CSS selector")   // grabs the closest html element with the mentioned css selector towards PARENTS' direction
.querySelector("CSS selector")   // grabs the closest html element with the mentioned css selector towards CHILDREN'S direction
.querySelectorAll("CSS selector") // same as before but grabs multiple of them like for classes 

*/

const grandParent = document.querySelector("#grand-parent");

// Examples -> 
const parent1 = grandParent.children[0]; // Parent 1
const child2 = parent1.children[1]; // Child 2

const parent2 = parent1.nextElementSibling; // Parent 2

const child1 = child2.previousElementSibling; // Child 1

const tmp1 = child2.closest("#grand-parent"); // grand--parent

const tmp2 = grandParent.querySelector("#child-one"); // Child 1