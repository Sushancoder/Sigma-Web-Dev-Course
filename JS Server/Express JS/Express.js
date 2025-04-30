// What and Why is express?
// Express.js is a web development framework built on Node.js, designed to facilitate the creation of production-level web applications.

const express = require('express')
const app = express()
const port = 3000


// Public accessible files
// Making files public on the URL: to be used is made very easy by using the express
  // For more info.: C:\Users\Neha\OneDrive\Documents\Html websites\CWH Sigma web dev course\JS\JS server\Express JS\public\The-Main-File.txt
  // Express.js can serve static files, such as HTML, CSS, and JavaScript, from a designated public directory using built-in middleware.

// We'll make a folder named public(you can give any name) here which will get served to the user when s/he makes a request about the file on the URL
app.use(express.static('public'))



// Making requests:
// Request means to ask the browser for some locati on like if you search for anything on the address bar
// app.get or app.post or app.put or app.deiete(path, handler)
// In  app.get('/', (req, res) => {}) The code goes like '/' is the path and the handler is the second parameter in app.get. 

app.get('/', (req, res) => { // Code says: run this handler whenever the request is given as '/'.
  res.send('Hello World!')
})
app.get('/aboutus', (req, res) => {  // app.get will enable users to go get response of a particular request
  res.send('About Us')
})
app.get('/contactus', (req, res) => { //you can add up as many of these kind of locations to be specified in your server using express
  res.send('Contact Us')
})



// Request parameters with variables:
// As we see different components of a url like in google and yt, or any site.
// 
app.get('/:slug/:secslug', (req, res) => { // We can give here as many variable for request as we want
  console.log(req)
  /* The req contains many object, like query and params and more useful objects.
     Params is an object which contains the variables in the url and if it specified like this: /:slug/:secslug, we can very seamlessly get access to them.

     Query is another useful object which contains the query parameters in the url, which are written after the question mark in the url, like in google searches.
  */  
  res.send(`This page is about:  ${req.params.slug}  And  ${req.params.secslug}`)
})

// More info 
  // If code is like this 
  // app.get('/n::name/m::class/r::roll', (req, res) => {
  //   res.send('<h1>hello world</h1>')
  //   // let roll = req.params.get('roll')
  //   console.log(req);
  // })

  // We can access the objects which look like this using the req object:
  // For ex, if url = http://localhost:3000/n:hey%20/m:34/r:67?name=myname
  // params: { name: 'hey ', class: '34', roll: '67' },
  // query: { name: 'aname' },




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// We can install specific versions of a module like this:
// npm i express@4 to download version 4 of express