const express = require('express')
const connectDB = require('./config/db') // call db file

const app = express()

// Connect DB
connectDB()

// //Init Middleware
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
