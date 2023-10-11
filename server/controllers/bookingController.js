const pool = new require('../config/db')
const bcrypt = require('bcryptjs')
const { generateAccessToken } = require('../middleware/authMiddleware')

const getAllBookings = async (req, res) => {
    try {
        const allBookings = await pool.query(
            'SELECT * FROM bookings ORDER BY booking_id ASC'
        )
        res.json(allBookings.rows)
    } catch (err) {
        console.error(err.message)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

const createBooking = async (req, res) => {
    try {
        const {
            user_id,
            date,
            time,
            status,
            availed_services
        } = req.body

        const bookingCreated = await pool.query(
            'INSERT INTO booking (user_id, date, time, status) VALUES ($1, $2, $3, $4) RETURNING *',
            [
                user_id,
                date,
                time,
                status
            ]
        )

        if (bookingCreated.rows.length === 0) {
            await pool.query('ROLLBACK')
            res.send('Booking Unsuccessful')
        }

        let total_price = null
        const booking_id = bookingCreated.rows[0].booking_id
        if (bookingCreated.rows.length !== 0) {
            for (let i = 0; i < availed_services.length; i++) {
                const availedServiceCreated = await pool.query(
                    'INSERT INTO availed_services (booking_id, service_name, patient_name, quantity, price) VALUES ($1, $2, $3, $4, $5) RETURNING *',
                    [
                        booking_id,
                        availed_services[i].service_name,
                        availed_services[i].patient_name,
                        availed_services[i].quantity,
                        availed_services[i].price
                    ]
                )
                total_price = total_price + (availed_services[i].quantity * availed_services[i].price)
            }
        }

        // Set the total price
        await pool.query('UPDATE booking SET total_price = $1 WHERE booking_id = $2', [total_price, booking_id])
        
        const bookingFullDetails = await pool.query('SELECT * FROM booking WHERE booking_id = $1', [booking_id])
        // console.log("Total Price: ", total_price)
        res.json(bookingFullDetails.rows[0])
    } catch (err) {
        await pool.query('ROLLBACK')
        console.error(err.message)
        res.status(500).json({ error: 'Booking Unsuccessful' })
    }
}

module.exports = {
    getAllBookings,
    createBooking
}
