// Errors in js

let fn = prompt('Enter your first number: ')
let sn = prompt('Enter your second number: ')

let sum = parseInt(fn) + Number(sn) // we add parseInt or number here so that the input given becomes an integer/number
//  because by default an input is a string

// Throwing custom error 
// This is how we'll throw syntax error if the input given is not a number
if (isNaN(fn) || isNaN(sn)) {
    throw SyntaxError('Invalid input')
}




// logging error into console

try {  // tries to execute the code in the try block
    console.log(`The sum of the given numbers is: ${sum * X}`)
}
catch (error) { // if the try block fails, then it executes the code in the catch block, this syntax even works when the error block i.e. (error) is not typed but it's not a good approach.
    console.log("X kon define karega.")
}
finally {
    console.log("Finally block is being executed.")
}




// More 


// when error doesn't work 
setTimeout(() => {
    console.log("Hacking wifi.... Please wait...")
}, 1000)

try {
    setTimeout(() => {           // here if error ocurrs then error will be executed but if you want to avoid errors inside time intervals then you can use the try and catch block of code inside the settimeout/setinterval 
        console.log(rahul)

        try {
            console.log(rahul) // we are using the try and catch block inside the try and catch block so that if the error occurs inside the intervals then it would be catched
        }
        catch (err) {
            console.log("Balle balle")
        }

    }, 100)
}
catch (err) {
    console.log("Balle balle")
}



// throwing custom errors at any location in code
throw new Error('this is an uncaught error bro.......')
// it will return an uncaught error like this : 
// Uncaught Error: this is an error bro.......
//     at Test.js:72:7

// You can also define the error type like this : 
throw new SyntaxError('this is a syntax error bro.......')
throw new TypeError('this is a type error bro.......')
throw new RangeError('this is a range error bro.......')
throw new ReferenceError('this is a reference error bro.......')
throw new URIError('this is a URI error bro.......')
throw new EvalError('this is a eval error bro.......')

// the result will contain now the error type like this :
// Uncaught SyntaxError: this is a syntax error bro.......
//     at Test.js:91:7
// in the place of syntax error there'll be all the errors mentioned above



// Error objects 
try {
    console.log(rahul)
} catch (error) {
    console.log(error) // to return the whole error
    console.log(error.name) // to return the error name
    console.log(error.message) // to return the error message
    console.log(error.stack) // to return the error stack trace same as the code at  85
}


// Finally clause
// the finally clause also works even if there's an error or a return function before the finally block

const f = () => {
    try {
            let a = 0;
            // console.log(program)
            console.log("Program ran successfully")
            return
    }
    catch (err) {
            console.log("This is an error")
            console.log(p)  // this block of code will produce an error but the finally block will run even after this
    }
    finally {
            console.log("I am a good boy")
            // Close the file
            // Exit the Loop
            // Write to the log file
    }
}

f()
console.log("End")