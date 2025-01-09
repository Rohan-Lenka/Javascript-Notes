export const me = {            // non default export, multiple non default exports possible 
    Name: "Rohan", 
    Age: 20
};

export const you = {   
    Name: "Sohan", 
    Age: 22
}
function printUser(user) {
    console.log(user.Name + " " + user.Age);
}

export default printUser;      // default export, only one possible 