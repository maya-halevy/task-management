const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../controllers/authController');

// Registration route
router.post('/register', authController.registerUser);

// Login route
router.post('/login', passport.authenticate('local', { failureRedirect: '/login-failure' }), authController.loginUser);

// Logout route
router.get('/logout', authController.logoutUser);

module.exports = router;
