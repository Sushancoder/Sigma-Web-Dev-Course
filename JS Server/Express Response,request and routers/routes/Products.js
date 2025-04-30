const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('<h1>Products home page</h1> <img src="./Pictures/openai-avatar.png">')
})

// define the about route
router.get('/about', (req, res) => {
  res.send('About Our products')
})

module.exports = router