const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// GET all users
router.get('/booking', bookingController.getAllBookings);

// CREATE a new user
router.post('/booking', bookingController.createBooking);

module.exports = router;