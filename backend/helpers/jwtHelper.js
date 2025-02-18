const jwt = require('jsonwebtoken');


const generateToken = (userId) => {
    const payload = {
        user: {
            id: userId,
        },
    };

    return jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: '5 days' }  // Adjust token expiration as needed
    );
};

module.exports = generateToken;
