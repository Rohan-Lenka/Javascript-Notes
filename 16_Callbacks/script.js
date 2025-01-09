// Async functions -> The functions which take effect after SOME TIME or after the occurance of an EVENT
    // eg -> eventListeners, setTImeout, etc
setTimeout(() => {  // this function takes 2 parameters =>  1) function to execute 2) duration after which it'll execute
    console.log("inside");
}, 1000);           // delays the execution of the console.log() by 1000 ms i.e 1 s
console.log("outside");

// callback functions -> The functions that are passed inside of these async functions
const btn = document.querySelector("button");

function addClickEventListener(el, callback) { // takes 2 arguments => html Element, callback function 
    el.addEventListener("click", callback);
}

addClickEventListener(btn, () => {
    console.log("clicked");
});

// Callback hell -> multiple nested callback functions which makes a mess
    // Eg ->
setTimeout(() => {
    console.log("1")
    setTimeout(() => {
        console.log("2");
        setTimeout(() => {
            console.log("3");
        }, 1000);
    }, 1000);
}, 1000);
// To solve this problem, promises were introduced 