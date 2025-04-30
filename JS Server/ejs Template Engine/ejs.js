// For more information of ejs visit: https://github.com/mde/ejs/wiki/Using-EJS-with-Express
const express = require('express')
const app = express()
const port = 3000


// ejs steps:
  // Install ejs module 
  // Include this here: app.set('view engine', "ejs")
  // Use render like this: res.render('{file name}', {Variables}), instead of res.send.
  // Create a .ejs file in views folder and use " <%= appname %> " to include the required variables.
  // ejs assumes that you are using a views folder automatically, which you can change like this: 
      // https://stackoverflow.com/questions/59746904/how-does-node-js-know-to-render-ejs-in-views-folder
      // app.set('view', config.root + '/app/views') // Changed
      // app.set('view engine', 'jade')               // Default

  // You can write the variable names like this: {appName} or this {appName: name_of_app}, just use it in the html file 


// Ejs 
app.set('view engine', "ejs")//here we import viewengine as ejs EJS is a view engine in express

app.get('/', (req, res) => {
  let siteName = 'Bloomberg'
  let searchBar = "Search Now"
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  res.render('nav.ejs', {siteName: siteName, searchBar: searchBar, array}) //If the variable name is equal to key then you can just type the key i.e. here we type only array but ejs will automatically interpret it as {array: array}
  // We can write nav.ejs as: nav or ./nav.ejs or nav.ejs. For more refer to line: 12
})

// app.get('/blog/:slug', (req, res) => {
//   let BlogTitle = 'The Blog Title'
//   let BlogContent = "This is a blog for test about ejs in js"
//   res.render('nav.ejs', {blogTitle: BlogTitle, blogContent: BlogContent})
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})   