const pool = new require('../config/db')
const bcrypt = require('bcryptjs')
const { generateAccessToken } = require('../middleware/authMiddleware')

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await pool.query(
            'SELECT * FROM users ORDER BY user_id ASC'
        )
        res.json(allUsers.rows)
    } catch (err) {
        console.error(err.message)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

const createUser = async (req, res) => {
    try {
        const { 
            email,
            password,
            name,
            address,
            role,
            contact_number,
            gender,
            birthdate
        } = req.body
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)
        const newUser = await pool.query(
            'INSERT INTO users (email, password, name, address, role, contact_number, gender, birthdate) \
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
            [email, hashedPassword, name, address, role, contact_number, gender, birthdate]
        )
        res.json(newUser.rows[0])
    } catch (err) {
        console.error(err.message)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

const updateUser = async (req, res) => {
    try {
        const { user_id } = req.params
        const { 
            email,
            password,
            name,
            address,
            contact_number,
            gender,
            birthdate
         } = req.body

        // Hash the password if it's provided
        let hashedPassword = null
        if (password) {
            const salt = bcrypt.genSaltSync(10)
            hashedPassword = bcrypt.hashSync(password, salt)
        }

        const updateUser = await pool.query(
            'UPDATE users SET email = $1, password = $2, name = $3, address = $4, contact_number = $5, gender = $6, birthdate = $7 WHERE user_id = $8 RETURNING *',
            [
                email,
                hashedPassword,
                name,
                address,
                contact_number,
                gender,
                birthdate,
                user_id
            ]
        )
        res.json(updateUser.rows[0])
    } catch (err) {
        console.error(err.message)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

const deleteUser = async (req, res) => {
    try {
        const { user_id } = req.params
        await pool.query('DELETE FROM users WHERE user_id = $1', [user_id])
        res.json(`Successfully Deleted User ID: ${user_id}`)
    } catch (err) {
        console.error(err.message)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const userDetails = await pool.query(
            'SELECT * FROM users WHERE email =$1',
            [email]
        )
        if (userDetails.rowCount !== 0) {
            const matched = await bcrypt.compare(password, userDetails.rows[0].password)
            const generatedToken = generateAccessToken({
                email: email,
            })
            userDetails.rows[0].token = generatedToken

            if (matched) {
                res.json(userDetails.rows[0])
            } else {
                throw new Error("Password mismatched!")
            } 
        } else {
            res.json(`User does not exist`)
        }
    } catch (err) {
        console.error(err.message)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    loginUser,
}
