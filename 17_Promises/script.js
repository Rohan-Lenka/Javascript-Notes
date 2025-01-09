/*

// Create a promise ->
const promise = new Promise((resolve, reject) => {
  // resolve & reject and functions, can have any name but normally used these names
  const sum = 1 + 1;

  if (sum === 2) {
    resolve("Success");
  } else {
    reject("Error");
  }
});

// Call the promise ->
promise
  .then((msg) => {     // then function is executed when promise is successful
    console.log(msg);  // inside u take resolve function
  })
  .catch((msg) => {    // catch function is executed when promise is un-successful
    console.error(msg); // inside u take reject function
  });

  */

// Async code using promisees ->
    // Make a new function which returns promise
    // wrap the async code inside the promise
function setTImeoutPromise(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}

setTImeoutPromise(4000).then(() => {
  console.log("delayed");
});

// Remember the callback hell that we encountered earlier, lets solve that
// can be resolved by chaining the promise while calling it
setTImeoutPromise(1000)
    .then(() => {
        console.log("1");
        return setTImeoutPromise(1000);
    })
    .then(() => {         // .then() function for the previous setTimeoutPromise 
        console.log("2");
        return setTImeoutPromise(1000);
    })
    .then(() => {         // .then() function for the previous setTimeoutPromise 
        console.log("3");
    })

// Q -> Create a prmoise s.t when clicked logs out clicked
const btn = document.querySelector("[data-btn]");

function addEventListenerPromise(el, event, str) {
    return new Promise((resolve, reject) => {
        el.addEventListener(event, () => resolve(str)); // we use the resolve inside a dummy function // IMP
    }); 
}

addEventListenerPromise(btn, "click", "clicked")
    .then(str => {
        console.log(str);
    });


