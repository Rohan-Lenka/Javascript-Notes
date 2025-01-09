const exportObject = require("./user");
console.log(typeof exportObject); // the import is an object, as the export was an object too

exportObject.printUser(exportObject.me); 
exportObject.printUser(exportObject.you);
// access like normal object keys 