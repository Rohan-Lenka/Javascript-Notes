// You can create objects using functions too ->
function createUser(userName, userAge) {
    return {
        Name : userName,
        Age : userAge,
        isHuman : true
    };
}
const user1 = createUser("Rohan", 20);
// This way is generally avoided

// So using new and this keyword ->
function User(userName, userAge) { // this is called constructor 
    // this = {};            // this is automatically done
    this.Name = userName;
    this.Age = userAge;
    this.isHuman = true;
    // return this;          // this is automatically done
}
const user2 = new User("Mohan", 22); // this is called calling the constructor
console.log(user2);

// Date in js 
const date = new Date();
console.log(date.getDate());
console.log(date.getDay());   // Mon to Sun => 0 to 6
console.log(date.getFullYear());
// And many more methods for Date 

console.log(Date()); // To view properly 

// CLASS 
// In js classes are not used oftenly

class Book {
    constructor(bookName, bookColor) {
        this.Name = bookName;
        this.Color = bookColor;
    }

    // u can make functions inside classes too
    getName() {
        console.log(this.Name);
    }
};

const book = new Book("Maths", "Red");
book.getName();