let person1 = {
    Name : "Rohan",
    age : 20,
    favColor : "black"
};

// console is also an object in js and log is its function
// console.log(console);  // uncomment this to see the output for console object

// function for object ->
let person2 = {
    Name : "Sohan",
    age : 21,
    favColor : "white",

    sayHi1 : function () {
        comsole.log("Hi 1");
    },
    sayHi2() {
        console.log("Hi 2");
    }
    // 2 ways of declaring function inside of object
    // 2nd way is generally used // IMP
};

// How to access ->
console.log(person2.Name);
// OR
console.log(person2["Name"]); // Avoid doing this 
person2.sayHi2();

// NESTED OBJECTS

let book = {
    Name : "Maths", 
    author : {
        Name : "RD Sharma", 
        Age : 75
    },
    published : 2014,
    topics : ["Number Theory", "Algebra", "Calculus"]
};
console.log(book.author.Name);
console.log(book.topics[1]);

// You can UPDATE or ADD new properties later too ->
book.Name = "High School Maths"; // book name changed
book.pages = 500; // new property added to the object book 
console.log(book.Name);
console.log(book.pages);
