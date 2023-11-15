const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db') // call db file
const path = require('path')

const app = express()

// Connect DB
connectDB()

// Enable CORS for all routes
app.use(cors())

// Example CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://mern-stack-portfolio-site-01714068399c.herokuapp.com')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

// Init Middleware
app.use(express.json({ extended: false }))

// app.get('/', (req, res) => res.send('API Running'))

// Define Routes
app.use('/api/profile', require('./routes/api/profile'))

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server start on port ${PORT}`))
