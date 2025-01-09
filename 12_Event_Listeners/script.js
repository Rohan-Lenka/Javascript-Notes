const btn = document.querySelector("[data-btn]");

btn.addEventListener("click", () => { // event, function -> When the event occurs, the function fires
    console.log("Clicked 1");         // an event can't be anythng, there are specific events which can be used
});

function printClick() {
    console.log("Clicked 2");
}
btn.addEventListener("click", printClick);
// Event Listeners don't override, they all work side by side // IMP

// How to remove any event listener ->
btn.removeEventListener("click", printClick);

// U can get access to the event object by simply typing out event / e (generally used)
const input = document.querySelector("[data-input-text]");
// input.addEventListener("input", () => {   // more events like change
//     console.log("used...");
// }); // this event listener basically prints used... whenever the text-input box is used

// How to use the event object ->
input.addEventListener("input", e /*event*/ => {
    console.log(e.target.value === ""); // logs out true whenever u make the text-input box empty
});

