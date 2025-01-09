function fx() {
    console.log("Hi 1");
    console.log("Hi 2");
    new Promise((resolve, reject) => {
        resolve("Hi Promise");
    }).then((msg) => console.log(msg));
    setTimeout(() => console.log("Hi 3"), 30);
    setTimeout(() => console.log("Hi 4"), 0);
    console.log("Hi 5");
}
fx();
console.log("Hi 6");
// Main thread -> All the normal tasks are performed, in top to down manner
// Task Queue -> All async functions are sent there
// once all tasks in main thread are over, then only the queued tasks are performed

// Weird nature of promises -> 

// They show exceptional behaviour. They basically get executed after rest of the Main thread contents 
// of the function in which that promise is residing are executed. 

// Here in the above example, you'll see Hi 6 being printed before Hi Promise although the reverse should have happend coz,
// resolving the Promise is a bit SLOWER than executing the simple console.log(Hi 6)

// ANOTHER EXCEPTION ->
// If a setTimeout function is present inside of a promise, then it follows the default rule of queuing in the task queue accd to its delay time
// Eg -> 

// function fx() {
//     console.log("Hi 1");
//     console.log("Hi 2");
//     new Promise((resolve, reject) => {
//         resolve("Hi Promise");
//     }).then((msg) => {
//         setTimeout(msg => {
//             console.log("Hi Promise");
//         }, 0);
//     });
//     setTimeout(() => console.log("Hi 3"), 30);
//     setTimeout(() => console.log("Hi 4"), 0);
//     console.log("Hi 5");
// }
// fx();
// console.log("Hi 6");
// Uncomment to see