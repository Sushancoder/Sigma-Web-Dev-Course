// IIFE 

async function sleep(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('resoved bro...')
        }, 2000);
    })
}

// async function main1(){
//     let result = await sleep()
//     console.log(result)
// } 
// main1() // this is what we would normally do but here we have a better way to do it.

// This is called immediate invoked function expression or IIFE 
(async function main2(){
    let result = await sleep()
    console.log(result)
})()



// Destructing

// This is how we can assign 
let [a, b, c] = [1, 2, 3] // this is how we can assign multiple values to multiple variables in one line.
console.log(a, b, c) // output: 1 2 3

let [d, e, f] = [4, 5, 6, 3, 5] // now if we have more values than the number of variables we are trying to assign them to, then the extra values will be ignored.
console.log(d, e, f) // output: 4 5 6

let [s, t, u] = [4, 5] // now if we have less values than the number of variables we are trying to assign them to, then the extra variables will get the value as undefined.
console.log(s, t, u) // output: 4 5 6

// Spread operator:
let [x, y, ...more] = [1, 2, 3, 4, 5, 6, 7, 8, 9] // now if we want to assign the rest of the values to a variable, then we can do that by using the ... operator.
console.log(x, y, more) // output: 1 2 [3, 4, 5, 6, 7, 8, 9]
let [z, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9] // now if we want to assign the rest of the values to a variable, then we can do that by using the ... operator.
console.log(z, rest) // output: 1 [2, 3, 4, 5, 6, 7, 8, 9]

// For objects
let obj = {
    name: 'Mahesh',
    age: 21,
    gender: 'Male'
}

let { name, age, gender } = obj //this is how we can assign the elements in objects to specific variables globally
console.log(name, age, gender)

// Spread in arrays

function sum(a, b, c) {
    return a + b + c
}

let arr = [1, 2, 7]
console.log(arr[0], arr[1], arr[2]) // this is how we can access the elements of an array but it is an overwhelming method
console.log(sum(...arr)) // So here we have the spread operator which is opens the array and we are able to access all the elements easily.

// Scopes: Global, Block and Local
// Global scope: Variables and functions declared globally (outside any blocks or functions) have global scope and can be accessed from anywhere in the code.
// Local scope: Variables and functions declared inside a function have local scope and can only be accessed within that function. Parameters also have local scope.
// Block scope: Variables and functions declared inside a block ({ }) have block scope. Blocks can be if/else statements, loops, or any other block defined by curly braces. Variables declared with let and const have block scope.

let g = 10 // this is a global variable
function sum1(a, b) {
    let c = a + b // this is a local variable
    return c
}
if (true) {
    let d = 20 // this is block scope 
}


// Hoisting: The process of moving function declarations and variable declarations to the top of their scope before execution.
// This only works with var or functions and not with const or let 
// Example:
console.log(r)
console.log('other codes')
console.log('other codes...')
var r = 34 
// Here we will get the result as undefined because what happens here is that the in this declaraion(var r = 34 ) the first part(var r) is sent above the but the rest of the part(= 34 ) is not sent above and hence the value is undefined.
// something similar happens to functions in this case also 
// This doesn't happen with the const or let