const btns = document.querySelectorAll(".delegation");

document.addEventListener("click", () => {
    console.log("document clicked");
});

document.body.addEventListener("click", () => {
    console.log("body clicked");
});

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log("button clicked");
    });
});

// When the any btn is clicked, all of them are printed out in the console
// Reason ->

// Capture -> When any event occurs, capturing occurs from outside to inside untill the location of the event is reached
    // Eg -> btn is clicked, capturing occurs from => document -> body -> btn

// Bubbling -> After capture, bubbling occurs from inside to outside untill the document is reached.
// All the firing functions of eventListeners occur during this bubbling phase by default 
    // Eg -> bubbling from btn -> body -> document

// replace the body addEventListener with this ->
/*

document.body.addEventListener("click", () => {
    console.log("body clicked");
}, {capture: true} );

// By default that capture property is set to false.
// By setting it true means, it removes the default behaviour and the function fires during the capture phase  // IMP
// i.e when a btn is clicked => 
    // CAPTURE PHASE = docu -> body(fx for body fires now) -> btn
    // BUBBLE PHASE = btn(fx fires) -> body(default behaviour removed) -> docu(fx fires)

*/

// HOW TO REMOVE EVENT DELEGATION ->

const btn5 = document.querySelector('[data-nonDelegation]');

btn5.addEventListener("click", e => {
    e.stopPropagation(); // stops bubbling after this btn is reached 
    console.log("non Delegation btn clicked");
});