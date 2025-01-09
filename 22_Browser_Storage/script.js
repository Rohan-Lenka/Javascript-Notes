// this is browser specific
// Eg -> chrome != firefox
//    -> desktop chrome != mobile chrome

// types ->         | Local Storage     | Cookies           | Session Storage
// size ->          | 10 mb             | 4 kb              | 5 mb
// expiration ->    | Never             | Manual            | on closing the tab
// availability ->  | Client            | Client + server   | Client
// difficulty ->    | easy              | hard              | easy

// local Storage
localStorage.setItem("Name", "Rohan"); // (key, value) // both must be strings
localStorage.setItem("Age", "20"); 
localStorage.setItem("Name", "Sohan"); // to update the key -> value pair
localStorage.removeItem("Age"); // just pass in the key
console.log(localStorage.getItem("Name")); // to get the value associated with the key 

// session Storage
// Completely same as local Storage

// Cookies

// 1)
document.cookie = "Name=Rohan";  // <key>=<value> pair

// 2)
// default expiration date is some past value
// How to set expiration date -> 
const date = new Date(9999, 0, 1).toUTCString();  // a date which is way in the future & is not going to come 
// needed to conv to string s.t it can be passed inside an object 
document.cookie = `Profession=student; expires=${date}`;

// 3)
console.log(document.cookie); // logs out all cookies present

// 4)
// How to delete a cookie -> 
const pastdate = new Date(1999, 0, 1); 
document.cookie = `Name=; expires=${pastdate}`; // set the expiration date to a past date s.t it expires automatically 
console.log(document.cookie); // the above cookie must be expired