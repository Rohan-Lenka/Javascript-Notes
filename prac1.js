function setTimeoutPromise(msg, duration) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(msg);
        }, duration)
    }).then(msg => console.log(msg));
}

async function doStuff() {
    await setTimeoutPromise(`hello`, 2000);
    await setTimeoutPromise(`world`, 2000);
    await setTimeoutPromise(`I am Rohan`, 3000);
}
doStuff();