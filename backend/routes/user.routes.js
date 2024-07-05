const express = require('express')
const {check} = require('express-validator')
const userController = require('../controllers/user.controllers');
const authMiddleware = require('../middlewares/userMiddleware');
const errorHandler = require('../middlewares/errorHandler');

const router = express.Router();

//signup route
router.route('/signup').post(
    [
        check('name', 'Name is required').not.isEmpty(),
        check('email', 'please include a valid email').isEmail(),
        check('password', 'please Enter a password with 6 or more character').islength({min: 6}),
    ],
    userController.signup
);

router.get('/protected', authMiddleware, (req, res) => {
    res.json({msg: 'Access granted'})
});

router.use(errorHandler);
module.exports = router;