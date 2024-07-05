const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const User = require('../models/User.model');
const generateToken = require('../helpers/jwtHelper');

exports.signup = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Validate inputs
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Check if user exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Create new user
        user = new User({
            name,
            email,
            password,
        });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Save user to database
        await user.save();

        // Generate and return JWT token
        const token = generateToken(user.id);
        res.status(201).json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
