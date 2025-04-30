// Working with Files Using JS:
// This file uses the callback methods
// For comprehensive list of functions with promises go to "\Manipulating files\Fs using es6.js"

//The node:fs module enables interacting with the file system in a way modeled on standard POSIX functions.
const fs = require('fs'); // you can also convert it into an importable module(by using the ecmascript method that we learnt earlier.)



// Two ways of using 'fs', this can be done in both commonjs and es6 modules:
    // By using callbacks:
    // Example: const fs = require('fs');(The issue is that it uses callbacks can lead to unreadable code, or callback hells)

    // By using promises:
    // Example: const fs = require('fs/promises'); (The benefit is that promises are much easier to read and intuitive.)



    
// Functions of the fs module:

// Get all the functions of "fs":
// console.log(fs);


// Writing a file:
// There are mainly used two ways of writing,reading or appending a file, syncronous and asynchronous.

// Syncronous:
// 1. By using Write file sync: It runs syncronously on the program which means the code below it will not run until it finishes.
fs.writeFileSync('pythonfile.py', 'for i in range(101):\n \t print(i)');
// fs.writeFileSync('C:\\Users\\Neha\\OneDrive\\Documents\\Html websites\\CWH Sigma web dev course\\JS\\JS server/Manipulating files\\thenode.txt', 'This is a node file.')

// Asynchronous:
// 2. By using Write file(recommended to use): It runs asyncronously on the program and the rest of the code will work while the file is being written.
// fs.writeFile('pythonfile2.py', 'for i in range(101):\n \t print(i)')
// You can also add a callback to the writeFile:
fs.writeFile('pythonfile2.py', 'for i in range(101):\n \t print(i)', ()=>{
    // console.log('Writing pyhtonfile3.');
})


// Reading a file:
// Here also we have the readfile and readfilesync(runs asyncronously)
//     Returns null if no error <--^     ^--> returns the data in buffer by default(you can change it)
fs.readFile('./pythonfile3.py', (error, data)=>{
    // console.log(error,'\n', data.toString());
})


// Appending a file:
// Here also we have the appendfile and appendfilesync(runs asyncronously)
fs.appendFile('pythonfile3.py', 'second data', (e, d)=>{
    console.log(e, d);
    console.log('Appended the required data to ./pythonfile3.py');
})

// Recommendations:
    // Use the promises
    // Use asyncronous functions