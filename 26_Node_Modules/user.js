const me = {            
    Name: "Rohan", 
    Age: 20
};

const you = {   
    Name: "Sohan", 
    Age: 22
}
function printUser(user) {
    console.log(user.Name + " " + user.Age);
}

module.exports = {
    me: me, // name inside the object should be same as the variable name // IMP  
    you: you,
    printUser: printUser 
};  // export as an object
/// can only export one single thing i.e this module.exports