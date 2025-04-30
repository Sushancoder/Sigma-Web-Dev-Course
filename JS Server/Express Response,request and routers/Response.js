const express = require('express');
const app = express();
const port = 3000;


// Routers:

const blog = require('./routes/blog') // We give the location of the page(blog) and store it in blog variable
const products = require('./routes/Products.js') // Here we can eithter specify the name with the js extension or just not use the js extension


// We use routers in js so that we can manage our pages properly like: 
// let's say we have a page named blog another one named about, tools, products etc. 
// So we should type the location and details of all those pages in the same file i.e. this file. 
// What we need to do is to create a specific file for every page, and connect them using a router
// So now we can have a separate page which contains the data about blog another one which contains about home, about, etc..
// THe another file will handle this page(This can be used if you want somebody else to write a component of a page for you without tampering the main code.)
app.use('/blog', blog) // This connects the page named blog which contains the page data from the blog file.
app.use('/products', products) // If endpoint is products, do what is in the products file


app.use(express.static('public'))


// Requests:

// GET Request
app.get('/', (req, res) => {  //If you search any url on the web so it's a get request. 
// A GET request is an HTTP request method that retrieves data from a specified resource
// . It is one of the main HTTP methods used to fetch web resources from a specified URL.
// Get request is the default request by the browser.
  res.send('Hello World!');
  console.log('Sent the post request.');
});

// Post Request
app.post('/', (req, res) => { // Used to create or update resources on the server. 
// They can be sent after a time interval
// A POST request is an HTTP request method that is used to submit data to a server for processing. 
// It is typically used to create or update resources on the server, such as creating a new user account or posting a comment to a blog.
  res.send('This is a post request.');
  console.log('Sent the post request.');
});

// Put Request
app.put('/', (req, res) => { // Pretty much As same as post request but mainly used to update resources on the server
  res.send('This is a put request.');
  console.log('Sent the put request.');
});

// Chaining
// You can also chain all the requests shown with the app like this:
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// }).get('/aboutus', (req, res) => {
//   res.send('About Us');
// }).get('/contactus', (req, res) => {
//   res.send('Contact Us');
// });



// To serve html files
app.get('/index', (req, res) => {
  console.log('Sent the index.');
  res.sendFile('templates/index.html', {root: __dirname}); // Bcuz the file is in a different folder we need to specify the root folder, and express doesn't know my root folder so we have to give it.
});

// Instead of making our work overwhelming, we use postman



// Different response methods in express: 
// Brief: https://www.w3schools.in/express-js/response-methods
// Detailed: https://www.tpointtech.com/expressjs-response

// +---------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------- +
// | Method                                                  | Description                                                                                                            |
// +---------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------- +
// | `res.send([body])`                                      | Sends the HTTP response. Can send various data types (string, object, array, buffer). Automatically sets Content-Type. |
// +---------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------- +
// | `res.json([body])`                                      | Sends a JSON response. Sets Content-Type to application/json.                                                          |
// +---------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------- +
// | `res.sendFile(path, [options], [callback])`             | Sends a file as the response. Used for serving static files.                                                           |
// +---------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------- +
// | `res.render(view, [locals], [callback])`                | Renders a view (template) and sends the rendered HTML. Used with template engines.                                     |
// +---------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------- +
// | `res.redirect(status, path)`                            | Redirects the client to a different URL. Optional status code (301, 302).                                              |
// +---------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------- +
// | `res.sendStatus(statusCode)`                            | Sends a simple response with the specified HTTP status code (without a body).                                          |
// +---------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------- +
// | `res.status(statusCode)`                                | Sets the HTTP status code for the response. Used to chain with other response methods.                                 |
// +---------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------- +
// | `res.download(path, [filename], [options], [callback])` | Prompts the client to download a file. Optional filename for the downloaded file.                                      |
// +---------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------- +



// Json files 
app.get('/json', (req, res) => {
  res.json({a:1, b:'right', c:1, d:4, e:5 , rest:["start" , "restart"]})
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
