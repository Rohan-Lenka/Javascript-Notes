// This entire area is the GLOBAL SCOPE

/*

{

// this is how you make a scope locally, called a LOCAL SCOPE 

}

*/

// From a scope you can move to outside but not from outside to inside
// example ->

// global scope
let c = 3;
{
    // scope = 1
    let a = 1;
    {
        // scope = 2
        let b = 2;
        console.log(a);  // cant find a in this scope, so moves to scope 1
        console.log(b);  // found b in this scope
        console.log(c);  // cant find c in this scope, nor in the scope 1, so moves to global scope
    }
}
// movement -> scope 2 to 1 to global => correct
// anything else is wrong

{
    let a = 0;
}
console.log(a);
// run this to find error

// Q ->
{
    let a = 9;
    console.log(a);
}
let a = 10;
// priority => local > global