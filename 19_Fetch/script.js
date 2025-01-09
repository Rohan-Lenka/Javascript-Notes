// fetch ->
// fetches data from an API

/*

window.fetch(" //URL of the API from where u want to fetch the data ");
-this returns a promise 
-hence async function 

*/

// What is JSON ->
// javascript object notation -> basically means the same as js object

// The fetch function returns a promise which resolves into a response
// response means the data that is fetched from the API
// So ->
/*

window.fetch(" //URL of the API ").then(response => {
        return response.json();   // also a promise, converts our response to json i.e an js ob
    });

*/

// Eg ->
const responseToJsonPromise = fetch(
  "https://jsonplaceholder.typicode.com/users"  // this is a fake API which u can use to practice
).then(response => {
  return response.json();
});
responseToJsonPromise.then((data) => {
  data.forEach(User => {
    console.log(User);
});
});
//data is an array of objects(users) fetched from the API

// convert the same thing as async await ->

const URL = "https://jsonplaceholder.typicode.com/users";
async function doStuff() {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data.map(user => {
        return user.name;
    }));
}
doStuff();

// Error in fetch ->
// 1) somwthing wrong is tried to fetched -> shows error + returns the response(that maybe empty)
// 2) some internal problem in the API or internet connection problem from the user -> shows error only

// Eg ->

/*

async function doStuff() {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data[11]); // array only contains 10 obs, we are saying to get the 11th object which doesn't exist -> 1st error
}
doStuff();

*/
// uncomment to see

// response.ok == true when correct data is tried to fetch else false

/*

const URL = "https://jsonplaceholder.typicode.com/users";
async function doStuff() {
  try {
    const response = await fetch(URL);
    if (response.ok) {
      const data = await response.json();
      console.log(
        data.map((user) => {
          return user.name;
        })
      );
    } else {
      console.log("FAILURE");
    }
  } catch (error) {
    console.error(error);
  }
} // always do like this
doStuff();

*/
// uncomment to see
