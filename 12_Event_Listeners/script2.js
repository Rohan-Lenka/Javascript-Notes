const form = document.querySelector("[data-form]");

// What happens when u submit the form ?
// uncomment this to see ->
/* 
form.addEventListener("submit", () => {
    console.log("submitted");
});
*/
// Why the "submitted" disappears quickly ? ->
// -coz after u submit, the page refreshes automatically
// -This is something which happens by default 
//  & there's a way to prevent this default from happening using event listener 

form.addEventListener("submit", e => {
    e.preventDefault();   // All default behaviours are prevented
    console.log("submitted");
});

// Q -> Make an anchor tag in html and prevent the default behaviour
//      of going to another page when link is clicked & print something in the console as well

const anchor = document.querySelector("[data-anchor]");
anchor.addEventListener("click", e => {
    e.preventDefault();
    console.log("redirecting stopped successfully");
});

// Try all these diff. events in the above question 
// mouseenter
// mouseleave
// mouseover
// focus -> means tab onto it or click on it
// blur -> oppo. of focus  

/*
Additional diff between arrow and normal functions ->

btn.addEventListener("click", e => {
    console.log(this);           // scope is Global
});

btn.addEventListener("click", function(e) => {
    console.log(this);           // scope is button i.e inside which it is declared
});

// Remember, Always use arrow function inside eventListener functions
*/
