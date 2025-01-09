// 1) Select all elements
const list = document.querySelector("#list");
const form = document.querySelector("#new-item-form");
const input = document.querySelector("#item-input");

// 2) When I submit the form, add a new element
form.addEventListener("submit", e => {
    e.preventDefault(); // default is whenever the form is submitted, the page refreshes 

    // 1) Create a new item
    const item = document.createElement("div");
    item.innerText = input.value;     // Whatever is typed in the input, add that named item to the list  
    item.classList.add("list-item");  // gives a class to the new div 

    // 2) add that item to the list 
    list.appendChild(item);  // paramter is the child node not its CSS selector

    // 3) clear the input so that new text can be entered 
        // Remember we prevented default, this prevents clearing of input by itself after we submit the form
    input.value = "";

    // 4) set an eventListener s.t it removes the item when clicked
    item.addEventListener("click", e => {
        list.removeChild(item); // paramter is the child node not its CSS selector
        // Or do -> item.remove(); 
    }); 
});