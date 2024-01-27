const passport = require('passport');
const User = require('../models/User');

// Registration logic
exports.registerUser = (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User({ username, email });
  User.register(newUser, password, (err, user) => {
    if (err) {
      return res.status(400).json({ success: false, message: err.message });
    }
    passport.authenticate('local')(req, res, () => {
      return res.status(200).json({ success: true, message: 'User registered successfully' });
    });
  });
};

// Login logic
exports.loginUser = (req, res) => {
  res.status(200).json({ success: true, message: 'User logged in successfully' });
};

// Logout logic
exports.logoutUser = (req, res) => {
  req.logout();
  res.status(200).json({ success: true, message: 'User logged out successfully' });
};
