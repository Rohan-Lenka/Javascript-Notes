// DOCUMENT = the html document

// console.log(document); // uncomment to see the whole document object 
console.log(document.documentElement); // Same 

// Create html elements using document object ->
const el = document.createElement("span"); // Pass in the type of html element u want to create
el.innerText = "Welcome to the document";
document.body.appendChild(el);

