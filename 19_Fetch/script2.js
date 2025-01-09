// SEND DATA TO SERVER USING FETCH ->
const URL = "https://jsonplaceholder.typicode.com/posts";

async function sendData() {
    const response = await fetch(URL, {
        method: "POST",                // tells the server that we're going to send(POST) data 
        headers: {                     // mentions the type of data we're sending , requires a (key, value) pair
            "Content-Type": "application/json"    // <type of data>: <json type>
        },
        body: JSON.stringify({         // body -> location of server where we're going to send data. We can't send ob into the server,
            title: "New post",         // so reqs to conv it into a string, so JSON.stringfy() used
            body: "hello server",      
        })                             // inside the body we edit all the properties of the ob that we wanna add.
    });                                // Eg -> title, body, etc & even add new properties 

    const newPost = await response.json();
    console.log(newPost);
}
sendData();


// Q -> fetch and print the 1st 5 comments present in the fake server

// sol ->

// const newURL = "https://jsonplaceholder.typicode.com/comments";
// async function showComments() {
    //     const response = await fetch(newURL);
//     const comments = await response.json();
//     for(let i = 0; i < 5; i++) {
//         console.log(comments[i]);
//     }
// }
// showComments();