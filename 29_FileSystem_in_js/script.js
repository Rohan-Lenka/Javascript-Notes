//FILE HANDLING IN JAVASCRIPT -> OPERATIONS ON FILES

const fs = require("fs"); // this is a built in node module in js 

// Make file 
fs.writeFileSync(`./test.txt`, `Hi there Rohan`); // this is sync function
// <path & name of the file u wanna create>, <Content of the file> 
// If this same function is called again with the same file path but diff. content, it just overrides 
fs.writeFile(`./test1.txt`, `Hi there Rohan async`, (error) => {});  // this is async function
                                            // Can handle errors too

// Read File 
const contents = fs.readFileSync(`./readFile.txt`, `utf-8`);  // sync function, returns result, type is string 
console.log(contents);
fs.readFile(`./readFile.txt`, `utf-8`, (error, res) => {  // async function, returns void 
    if(error) {
        console.error(error);
    } else {
        console.log(res);
    }
});  

// Append 
fs.appendFileSync(`./appendAtFile.txt`, `\nhello Earth`); // \n adds a new line 
                                        // this content gets appended to the file mentioned 

// copy
fs.cpSync(`./test.txt`, `./copy.txt`);
            // source     // target

// delete file 
// fs.unlinkSync(`<file path>`);

// status of a file -> basically means meta data of a file
console.log(fs.statSync(`./test.txt`));

// make directories(folders)
fs.mkdirSync(`folder`);
fs.mkdirSync(`folder1/folder2/folder3`, { recursive: true }); // nested folders created