import print, { me as rohan, you } from "./user.js";  // importing the default and non default exports
// the name for default import can be anything like -> import func from "./user.js"; etc....

// the name for importing non default exports has to be accurate 
// to bypass that we can use syntax like -> { me as <prefered name> }

print(rohan);
print(you);

// 93% of browsers use ES6 modules, not all 