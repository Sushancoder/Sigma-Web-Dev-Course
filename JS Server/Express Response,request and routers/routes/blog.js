const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('Blog home page')
})

// define the about route
router.get('/about', (req, res) => {
  res.send('About the blog')
})

// A slug writer
router.get('/:slug', (req, res) => {
  res.send("We couldn't find: ",req.params.slug)
})

module.exports = router // Exporting this page to the main page