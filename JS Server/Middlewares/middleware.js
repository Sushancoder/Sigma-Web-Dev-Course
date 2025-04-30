const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public')) // This is also a type of middleware, because it is being used to control the flow of the request and response, here serving static files.

// You can also use routes like this 
const birds = require('./routes/blog')
app.use('/birds', birds)  // This is also a middleware. Explore the file to know to use middlware in routes


// Middleware: 
// Middleware is a function that is executed in the middle of the request-response cycle. It has access to the request and response objects, and can perform operations such as logging, error handling, and data transformation.
// #me: A middleware is a function that runs before the route handler function, app.get, etc.

// By using middlewares a lot can be done. Like, We can check whether a user is logged in or not.


// This is an example of middleware:
// app.use((req, res, next)=>{
  //   console.log('LOGGED')
  //   next()
  // })
  
  
  // A middleware has the following parameters:
  // req: The request object, which contains information about the incoming request, such as the URL, headers, and body.
  // res: The response object, which is used to send a response back to the client.
  // next: The next middleware function in the chain, which is used to pass control to the next middleware.
  
  // Middleware1
  app.use((req, res, next)=>{
    console.log('MI1')
    
    // res.send('Sent using the MI1 in middlewares') // If you send a response like this then the middleware will be stopped and the next middleware will not be called, because you have already sent a response to the browser.
    // But if you want to send a response then you should not give the next() method.
    // Note : You shouldn't send a response from a middleware, because it will stop the next middleware from being called.
    
    //You can use it to get the time, request method etc.like this:
    console.log(`${Date.now()} is a ${req.method}`)
    console.log(req.headers)
  req.carry = 'Hey i am carrying from req.carry' // You can change the request method, or get what is in the request method.

  next()  // This is used to give the control to the next middleware(here middleware 2)
})

// Middleware2
app.use((req, res, next)=>{
  console.log('MI2')
  req.parry = 'This is a parry.'
  next()
})

// app.use: Middlware
// app.get or app.post or app.put or app.delete: Request handlers


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('Hello about!')
})
app.get('/blog', (req, res) => {
  res.send('Hello blog!'+ req.carry) // Here we are using the req.carry method to get it's value.
})                  //  ^-- Use the plus sign only here not comma



// An error handling middleware
// app.use(function (err, req, res, next) {
//   console.error(err.stack)
//   res.status(500).send('Something broke!')
// });



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})