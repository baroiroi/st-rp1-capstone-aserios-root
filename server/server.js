// require('dotenv').config()
const cors = require('cors')
const express = require('express')

// database setup
const pool = require('./config/db')
const bodyParser = require('body-parser')

const loginRoutes = require('./routes/loginRoutes')
const userRoutes = require('./routes/userRoutes')
const bookingRoutes = require('./routes/bookingRoutes')

const { authenticateToken } = require('./middleware/authMiddleware')

const app = express()

// middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

// Use user routes (with authentication middleware for protected routes)
// app.use('/api/v1', authenticateToken, userRoutes)  // Uncomment this to wrap jwt userRoutes

app.use('/api/v1', loginRoutes)
app.use('/api/v1', userRoutes)
app.use('/api/v1', bookingRoutes)

const PORT = process.env.SERVERPORT || 3000

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})


