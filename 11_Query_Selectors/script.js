// querySelector -> grabs any html element of choice 
// querySelectorAll -> grabs any grp of html elements like class
//                  -> That selected grp is called nodeList
//                  -> nodeList has an array property => forEach which is very usefull 
// All these come under document object

// querySelector and querySelectorAll take CSS selector as parameter // IMP

const divWithDataTest = document.querySelector("[data-test]");    
const divsWithClasses = document.querySelectorAll(".div-class");   
const divWithInput = document.querySelector(".input-class");
const para = document.querySelector("p");
// Refer the CSS selector list given bellow

divWithDataTest.style.color = "red";
divWithInput.style.color = "cyan";
para.style.color = "blue";
divsWithClasses.forEach(div => {
    div.style.color = "green";
});

// If u want to convert the node List that u get from querySelectorAll, u can use this array Method =>
const divsWithClassesArray = Array.from(divsWithClasses);
// Now if u want, u can use all array methods like map, filter, etc
// NOTE - generally, no need of conversion, all necessary tasks can be performed using forEach

// CSS SELECTORS ->
/*
Element selectors
Example: "div", "p", "h1"

Class selectors
Example: ".classname"

ID selectors
Example: "#id"

Attribute selectors
Example: "[type='text']", "[data-key='value']"

Pseudo-classes
Example: ":hover", ":nth-child(2)", ":first-child"

Combinators
Descendant combinator: "div p"
Child combinator: "div > p"
Sibling combinator: "div + p", "div ~ p"

Group selectors
Example: "div, p, span"

Universal selector
Example: "*"
*/




