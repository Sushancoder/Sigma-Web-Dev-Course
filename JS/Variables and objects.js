// Data types in JavaScript

// // Primitive types:
// Number: let age = 30;
// String: let name = "John";
// Boolean: let isTrue = true;
// Null: let person = null;
// Undefined: let variable;
// Symbol: let id = Symbol("unique identifier");

// // Complex types:
// Object: let man = { name: "John", age: 30 };
// Array: let numbers = [1, 2, 3, 4, 5];
// Function: function greet() { console.log("Hello!"); }


// creating variables
// Using the var keyword:

// var x = 5;
// The var keyword was traditionally used to declare variables in JavaScript.
// Variables declared with var are function-scoped, meaning they are accessible within the function they are declared in.
// Variables declared with var can be redeclared and updated.
// Using the let keyword:

// let y = 10;
// The let keyword was introduced in ECMAScript 6 (ES6) as a block-scoped alternative to var.
// Variables declared with let are block-scoped, meaning they are accessible within the block they are declared in (e.g., within a function, loop, or if statement).
// Variables declared with let can be updated (their value can be changed), but not redeclared within the same block.
// Using the const keyword:

// const z = 15;
// The const keyword was also introduced in ES6.
// Variables declared with const are block-scoped and have the additional characteristic of being read-only.
// Once a value is assigned to a const variable, it cannot be reassigned or updated.
// However, if the const variable is an object or an array, the properties or elements of the object or array can still be modified.


let var1 = "ram" + 1
console.log(var1)
console.log(typeof var1)
console.log('\n')
const var2 = 'rakesh'

// creating an object
// const mydict = {
let mydict = {
    Python : 'A general purpose programming language used in a variety of fields.' ,
    HTML : 'A language used for creating the skeleton and some main functions of the website.' ,
    CSS : 'A language used for the styling of website.' ,
    JS : 'A language used to give some special functions to the website and make it more better and reliable.' ,
    SQL : ' A language used to manage databases.'
}
console.log()

// to print a specific key or value
const wonders = {
    Suresh : 401,
    Mahesh : 134,
    Kalpesh : 2010
  }
  
console.log(wonders['Suresh']);  //-----~~~~both refers to the first key of the object
console.log(wonders.Suresh);    //------^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

