require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
const port = process.env.SERVERPORT || 3000

// middleware
app.use(cors())
app.use(express.json())

const pool = require('./config/db')

app.get('/', (req, res) => {
    res.send('Hello WORLD!')
})
//read
app.get('/users', async (req, res) => {
    try {
        const users = await pool.query(
            'SELECT * FROM users ORDER BY user_id ASC'
        )
        res.json(users.rows)
    } catch (error) {
        console.error(error)
    }
})
//create
app.post('/users', async (req, res) => {
    const {
        email,
        password,
        first_name,
        last_name,
        address,
        role,
        contact_num,
        gender,
        birthdate,
    } = req.body
    try {
        const userCreated = await pool.query(
            'INSERT INTO users (email, password, first_name, last_name, address, role, contact_num, gender, birthdate) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
            [
                email,
                password,
                first_name,
                last_name,
                address,
                role,
                contact_num,
                gender,
                birthdate,
            ]
        )
        res.json(userCreated.rows[0])
    } catch (error) {
        console.error(error)
    }
})

//update
app.put('/users/:id', async (req, res) => {
    const { id } = req.params
    const {
        email,
        password,
        name,
        address,
        role,
        contact_num,
        gender,
        birthdate,
    } = req.body
    try {
        const userUpdated = await pool.query(
            'UPDATE users SET email = $1, password = $2, name = $3, address = $4, role = $5, contact_num = $6, gender = $7, birthdate =$8 WHERE user_id = $9 RETURNING *',
            [
                email,
                password,
                name,
                address,
                role,
                contact_num,
                gender,
                birthdate,
                id,
            ]
        )
        res.json(userUpdated.rows[0])
    } catch (error) {
        console.error(error)
    }
})
//delete
app.delete('/user/:id', async (req, res) => {
    const { id } = req.params
    try {
        const userDeleted = await pool.query(
            'DELETE FROM users WHERE user_id = $1 RETURNING *',
            [id]
        )
        res.json(userDeleted.rows[0])
    } catch (error) {
        console.error(error)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
