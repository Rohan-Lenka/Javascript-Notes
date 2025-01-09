const user = {
    username : "Sarita",
    age : 47,
    gender : "female"
    // these are called the keys of an object in javascript 
}; // object in javascript

function greet(user) {
    let title = "Mr.";
    if(user.gender == "female") {
        title = "Ms.";
    }
    console.log("Hello " + title + user.username + ", your age is " + user.age);
} // function in javascript

greet(user);

// Q -> Create an array of users(objects) and a function which takes 
// the array as input and prints the useres who are male and age > 18

// answer -> 

const users = [
    {
        Name : "Rohan",
        age : 20,
        gender : "male"
    },
    {
        Name : "Kavya",
        age : 21,
        gender : "female"
    },
    {
        Name : "Baby",
        age : 2,
        gender : "male"
    }
];

function validUsers(users) {
    for(let i=0;i<users.length;i++) {
        if(users[i].gender == "male" && users[i].age > 18) {
            console.log(users[i].Name + " is allowed to the party");
        } else {
            console.log(users[i].Name + " is not allowed to the party");
        }
    }
}

validUsers(users);
