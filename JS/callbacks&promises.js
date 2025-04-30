//Javascript shows asynchronous nature

// difference between synchronous and asynchronous
// Syncronous: Synchronous programming follows a sequential, linear execution model where each task must complete before the next one starts. For example, consider a program that makes two API requests - the second request cannot start until the first one completes. This blocking behavior can negatively impact performance and responsiveness for operations that involve waiting, such as network requests or user input/output.
// Asyncronous: Asynchronous programming uses a non-blocking model where multiple tasks can be executed concurrently and results handled independently when ready. For example, in the API request scenario above, the second request could start before the first one finishes by registering callbacks to handle the responses. This allows the program to continue processing other tasks while waiting for responses.

// Here is an experiment to show that
console.log("this is a text.");
console.log("this is another text.");

const t1 = setTimeout(() => {
  console.log("this is a text in t1.");
}, 1000);
const t2 = setTimeout(() => {
  console.log("this is a text in t2.");
}, 0);

console.log("this is the last text.");

// In the above experiment we see that the t2 is executed at last even if it has 0 seconds of delay. this is because of asyncronous nature of js.
// here the set timeout functions are delayed and other functions are allowed to run before set timeout



// Callback in JS:
// A callback is a function that is passed as an argument to another function and is executed after the other function has finished. This allows functions to communicate with each other without having to wait for each other to finish.
// Here is an example of a callback function in JavaScript:

const fn = () => {
  console.log("Hello! I am in fn");
};

const callback = (arg, func) => {
  console.log(arg);
  func()
};
const loadscript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("hihihaha", fn);
  document.body.append(sc);
};
loadscript(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
  callback
);

// Callback Hell:
// A callback hell in function callback is shown above
// a(function (resultsFromA) {
//   b(resultsFromA, function (resultsFromB) {
//     c(resultsFromB, function (resultsFromC) {
//       d(resultsFromC, function (resultsFromD) {
//         e(resultsFromD, function (resultsFromE) {
//           f(resultsFromE, function (resultsFromF) {
//             console.log(resultsFromF);
//           });
//         });
//       });
//     });
//   });
// });



// Promises in JS 

// Promises are a way to handle asynchronous operations in JavaScript. A promise represents the eventual completion (or failure) of an asynchronous operation, and its resulting value. or  A Promise represents an operation that hasn't completed yet, but is expected in the future. 
// Some key things to know about promises:
// A Promise is created by calling the Promise constructor and passing a callback function with two parameters - resolve and reject. This callback typically initiates an asynchronous operation. [
// The resolve and reject functions are used to determine the outcome of the Promise. resolve indicates success, reject indicates failure.
// Promises have a .then() method that takes callback functions for the resolve and reject cases. This allows asynchronous code to be written linearly instead of using nested callbacks.
// It's considered a best practice to avoid nested callbacks by chaining .then() calls instead. This makes the asynchronous flow easier to follow.

// example:
// const loadImage = new Promise((resolve, reject) => {
//   // do async work 
//   if (/* success */) {
//     resolve('Image loaded!');
//   } else {
//     reject('Image failed to load');
//   }
// });

// loadImage.then(
//   result => {
//     // use result of resolved Promise 
//   },
//   error => {
//     // handle rejection
//   }
// )

// CWH
console.log("This is Promises");

cghj

// Promise API methods
// Promise.all() - This method takes an iterable of Promises as an input (like an array) and returns a single Promise. This returned Promise will resolve when all of the input Promises have resolved or reject as soon as one rejects
// It works when all promises are resolved 
console.log('Promise.All()')
let p3 = Promise.all([proml, prom2]);
p3.then((a) => {
  console.log(a);
})
.catch((err) => {
  console.log(err);
});

// Promise.allSettled() is a method that allows you to handle multiple promises simultaneously and obtain the result of each promise, regardless of whether it resolves or rejects.
// It works even when one promise is rejected and returns values
console.log('Promise.AllSettled()')
let p4 = Promise.allSettled([proml, prom2]);
p4.then((a) => {
  console.log(a);
})
.catch((err) => {
  console.log(err);
});

// Promise.race() - This method takes an iterable of Promises as an input (like an array) and returns a single Promise. This returned Promise will resolve or reject as soon as one of the input Promises resolves or rejects.
// It conducts a race between multiple promises and returns the result of the first promise that resolves or rejects.
console.log('Promise.race()')
let p5 = Promise.race([proml, prom2]);
p5.then((a) => {
  console.log(a);
})
.catch((err) => {
  console.log(err);
});

// Promise.any() - This method takes an iterable of Promises as an input (like an array) and returns a single Promise. This returned Promise will resolve or reject as soon as one of the input Promises resolves or rejects.
console.log('Promise.any()')
let p6 = Promise.any([proml, prom2]);
p6.then((a) => {
  console.log(a);
})
.catch((err) => {
  console.log(err);
});

// Promise.resolve() - Creates a resolved promise and fulfills it with the given value. This is useful for interoperability with callback/non-promise based APIs.
console.log('Promise.resolve()')
let p7 = Promise.resolve([proml, prom2]);
p7.then((a) => {
  console.log(a);
})
.catch((err) => {
  console.log(err);
});

// Promise.reject() - Creates a rejected promise with the given reason. This is useful for modeling failures in asynchronous operations.
console.log('Promise.reject()')
let p8 = Promise.reject([proml, prom2]);
p8.then((a) => {
  console.log(a);
})
.catch((err) => {
  console.log(err);
});








// MBI (more but important)

// Fetch API 
// some examples of fetch api:
let p = fetch("https://jsonplaceholder.typicode.com/todos/1")
p.then((response) => {
    // console.log(response.status)
    // console.log(response.ok)
    // console.log(response.headers) 
    // these are some properties to be applied with the fetch api url
    //   console.log(response)
    return response.text()  // only one of these formats(.text, .json, .formdata , .blub, .arraybuffer, etc.) will be returned at once or it'll return an error
}).then((value2) => { console.log(value2);})
// we include two .then because fetch is a two stage process

// Most of the use cases are like this
let p2 = fetch("https://jsonplaceholder.org/users")
p2.then((response) => {return response.json()
}).then((value3) => { console.log(value3);})



// Post request
const createTodo = async (todo) => {
  let options = {
          method: "POST",
          headers: {
                  "Content-type": "application/json"
          },
          body: JSON.stringify(todo),
  }
  let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
  let response = await p.json()
  return response
}

const getTodo = async (id) => {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
  let r = await response.json()
  return r
}

const mainFunc = async () => {
  let todo = {
          title: 'Harry2',
          body: 'bhai2',
          userId: 1100,
  }
  let todor = await createTodo(todo)
  console.log(todor)
  console.log(await getTodo(101))
}

mainFunc()





// More





// Syncronous and asyncronous programmming
// Syncronous programming
// let a = prompt("What is your name?");
// let b = prompt("What is your age?");
// let c = prompt("What is your favorite color?");
// console.log(a + " is " + b + " years old and has " + c + " favorite color.");

// Asynchronous programming
// console.log("Start")
// setTimeout(function() {
//   console.log("Hey I am good");
// }, 3000)
// console.log("End")



// // Callbacks
// function loadScript(src, callback) {
//   var script = document.createElement("script");
//   script.src = src;
//   script.onload = function() {
//     console.log("Loaded script with SRC: " + src)
//     callback(null, src);
//   }
//   script.onerror = function() {
//     console.log("Error loading script with SRC: " + src);
//     callback(new Error("Src got some error"))
//   }
//   document.body.appendChild(script);
// }

// function hello(error, src) {
//   if (error) {
//     console.log(error)
//     return
//   }
//   alert('Hello World!' + src);
// }


// function goodmorning(error, src) {
  
//   if (error) {
//     console.log(error)
//     sendEmergencyMessageToCeo();
//     return
//   }
//   alert('Good morning' + src);
// }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", goodmorning) 





// This is how we can avoid callback hells
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//           console.log("Resolved after 2 seconds")
//           resolve(56)
//   }, 2000)
// })

// p1.then((value) => {
//   console.log(value)
//   return new Promise((resolve, reject) => {
//           setTimeout(() => { resolve("Promise 2") }, 2000)
//   }) 
// }).then((value) => {
//   console.log("We are done")
//   return 2
// }).then((value)=>{
//   console.log("Now we are pakka done")
// })


// const loadScript = (src) => {
//   return new Promise((resolve, reject) => {
//           let script = document.createElement("script")
//           script.type = "text/javascript"
//           script.src = src
//           document.body.appendChild(script)
//           script.onload = (script) => {
//                   resolve("Script has been loaded sir")
//           }
//           script.onerror = () => { reject(0) }
//   })
// }

// let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
// p1.then((value) => {
//   console.log(value)
//   return loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js")
// }).then((value) => {
//   console.log("Second script ready")
// }).catch((error) => {
//   console.log("We are sorry but we are having problems loading this script")
// })

// if we have a promise in .then functions then 
// every promise returns a it's value to the the next .then and so on