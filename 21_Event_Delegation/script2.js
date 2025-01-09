/*

// What happens if we do this -> 
const btns = document.querySelectorAll("button");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log("button clicked");
    });
});

const newBtn = document.createElement("button");
newBtn.innerText = "Button 5";
document.body.append(newBtn);

// when Button 5 is clicked is clicked, eventListener doesnt fire coz the newBtn is added after the eventListener has been defined
// Thats why we can take advantage of event delegation, s.t we dont have to care about when a new btn is added or not, 
// it will always run the eventListener 

*/

// Solution -> 

document.addEventListener("click", e => {
    if(e.target.matches("button")) {   // The matches function takes in a CSS Selector, returns a boolean type 
        console.log("Button Clicked");
    }
})

const newBtn = document.createElement("button");
newBtn.innerText = "Button 5";
document.body.append(newBtn);