import mongoose from 'mongoose';
import express from 'express';
import {Todo} from './models/Todo.js';  // Importing the mongoose model from another document
let mong = await mongoose.connect('mongodb://localhost:27017/todo') // Connecting to the database, await not necessary
// Specify the database where you want to connect or create if it doesn't exist(Here: todo)
const app = express()
const port = 3000


// Creating a database using mongoose
app.get('/', (req, res) => {
  // This is how we create a new document(object) for the collection
  const todo = new Todo([{desc: "This is a description of the mongoose", isDone: false, days: 365}, ])
  todo.save() // Saving the object in the collection
  res.send('Hello World by mongoose!')
  // res.send(user) // Showing saved object in the web page
})

app.get('/tod', async (req, res) => {
  let tod = await Todo.findOne({}) // We can use various mongoDB database methods here
  res.json({title:tod.title, desc:tod.desc, isDone:tod.isDone, days: tod.days})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// Database language
// Database: an organized collection of data, often stored electronically, that is designed to store, manage, and retrieve information efficiently.
// Collection: A grouping of related data records (or documents) within a database.
// Document: A document is a record in a document database