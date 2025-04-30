// Named export 
// import {a} from "./Expmodule.js"
// console.log(a);

// Default export  | This dot is necessary
import defex from "./Expmodule.js" // we can call the obj by any name bcz it will import by default
console.log(defex);  

// Rules 
    // Include a dot before the file name
    // You can use {anyname} under curly braces to import specific parts of the module, this is mostly used in case you are importing more than one values from the module or a default single value.
    // No need to use curly braces, just type like this if you want to import the default value from the module. 
        // Import anyname from "./anyfile.js"
    // This is not used commonly but this can be done: import myArray, {b, c, d} from "./exports.js"
        // Only if myArray is the default value.




// But if you want to know where did require or moducle come from:
// The reason is due to this function which runs by default when we import a module

(function (exports, require, module, __filename, __dirname) {
    
});

// Therefore if you type in any of these parameters you will get a response.
// This is the function that runs when we import a module. It takes in parameters:

// exports: An empty object which is what we export.
// require: A function which allows us to import other modules.
// module: An object which contains metadata about the module such as its filename, exports, etc.
// __filename: The absolute path of the current file.(console.log(__filename) to get the file name)
// __dirname: The absolute path of the directory of the current file.
