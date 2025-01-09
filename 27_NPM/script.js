// In the terminal -> 
    // make sure u are at the folder where u are currently working
    // npm init  OR  npm init -y (directly creates a JSON package with default values, ideal for small projects)
    // npm install <package name>  OR  npm i <package name>
    // read through the description of npm package before getting started

const uuid = require("uuid");
console.log(uuid.v4());

// This only works in nodejs & not in browser console
// In browser, u need ES6 modules, file paths and bundlers (for simplifying ur work)  