// Promise methods ->

    // NOTE -> 
        // Try out a method separately by commenting out the rest
        // else all of them executes randomly
        // Reason -> No setTimeout() function 

// 1) making and calling the Promise ob simultaneously
Promise.resolve("string").then(msg => {
    console.log(msg);
}); // Directly instantiating the Promise object and calling the resolve function
    // as resolve is called, define the resolve function inside .then()

Promise.resolve("string").then(msg => {
    console.error(msg);
}); // Directly instantiating the Promise object and calling the reject function
    // as reject is called, define the reject function inside .catch()

// 2) 
Promise.all([
    Promise.resolve("success 1"),
    Promise.resolve("success 2"),
    Promise.reject("error 1"),
    Promise.resolve("success 3"),
    Promise.reject("error 2"),
]).then(msg => {
    console.log(msg);
}).catch(msg => {
    console.error(msg);
});
// executes all the resolve functions if there are none reject
// if there's a reject, it will only execute the 1st reject

// 3)
Promise.any([
    Promise.reject("error 1"),
    Promise.resolve("success 1"),
    Promise.reject("error 2"),
    Promise.resolve("success 2"),
    Promise.resolve("success 3")
]).then(msg => {
    console.log(msg);
}).catch(msg => {
    console.error(msg);
});
// Only executes the 1st successful promise 
// If all're rejected, shows error as -> aggregateError: All promises were rejected

// 4)
Promise.race([
    Promise.reject("error 1"),
    Promise.resolve("success 1"),
    Promise.reject("error 2"),
    Promise.resolve("success 2"),
    Promise.resolve("success 3")
]).then(msg => {
    console.log(msg);
}).catch(msg => {
    console.error(msg);
});
// Only executes the 1st promise whhether successful or failure

// 5)
Promise.allSettled([
    Promise.reject("error 1"),
    Promise.resolve("success 1"),
    Promise.resolve("success 3")
]).then(msg => {
    console.log(msg);
}).catch(msg => {
    console.error(msg);
});
// logs out the status of every promises present inside the array in one portion

// 6)
const promise = Promise.reject("here");

promise
    .then(msg => {
        console.log(msg);
    })
    .catch(msg => {
        console.error(msg);
    })
    .finally(() => {
        console.log("Finally function executed");
    }); // finally function always executes in the end no matter success or failure

