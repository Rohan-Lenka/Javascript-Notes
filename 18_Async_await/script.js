// We have till now ->
    // Callback hell -> Promises -> async await(mostly used)

// Async await -> 

/* 

func makePromise() {
    // a function that returns a promise
}

async function func() {
try {
     await makePromise();
} catch(error) {              //  handles EVERY error including failed promise errors
    console.error(error);
} finally {
                              // As usual, always executes at the last (optional)
}
}

async-> makes a async function, await-> automatically executes the promise
                                     -> if successful, resolve executes else reject 

*/

// Eg ->
function func(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, delay);
    }).then(() => {   // define the resolve function here
        return 123;
    }); 
}
async function doStuff() {
    try {
        const el = await func(3000);  // el is the return value of resolve function
        console.log(el);
        console.log(typeof el);
    } catch(e) {
        console.error(e);
    } finally {
        console.log("finally executes at last as always");
    }
}
 
// doStuff();
// uncomemnt to see

// Chaining -> 
function resolveStrWithDelayPromise(str, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(str);
        }, delay);    // We haven't defined the resolve function here. By default the resolve function returns the val passed to it
    })
}
function rejectStrWithDelayPromise(str, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(str);
        }, delay);   // same with reject
    })
}

async function chain() {
    try {
        const el1 = await resolveStrWithDelayPromise("try", 250); // gets executed in try block
        console.log(el1);
        const el2 = await resolveStrWithDelayPromise("block", 250); // gets executed in try block
        console.log(el2);
        const el3 = await rejectStrWithDelayPromise("error !", 250); // gets executed in catch block, exits this one
        console.log(el3);  // doesn't get executed 
    } catch(error) {
        console.error(error);
    }
}

// chain();
// uncomemnt to see

// difference between promise and async-await ->
function delay(val) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(val)
        }, 250);
    });
}

async function asyncDostuff() {
    for(let i=0;i<=7;i++) {
        const el = await delay(i);
        console.log(el); 
    }
} // logs out one after another after every 250 ms

function promiseDoStuff() {
    for(let i=0;i<=7;i++) {
        delay(i).then(i => {
            console.log(i);
        });
    }
} // after a delay of 250 ms, all the stuff gets logged out at the same time

// asyncDostuff();
// promiseDoStuff();
// dont un-comment both at the same time ->