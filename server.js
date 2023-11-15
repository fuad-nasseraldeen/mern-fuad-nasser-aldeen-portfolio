const express = require('express')
const connectDB = require('./config/db') // call db file
const path = require('path')

const socketIO = require('socket.io')
const http = require('http')


const server = http.createServer(express)
const io = socketIO(server)
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
  // Log messages from the server to the client
  io.on('connection', (socket) => {
    console.log('A client connected')
    socket.on('disconnect', () => {
      console.log('A client disconnected')
    })

    // Example server-side log
    console.log('Sending a log message from the server')
    socket.emit('serverLog', 'This message is from the server')
    socket.emit('path', path)
  })
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server start on port ${PORT}`))