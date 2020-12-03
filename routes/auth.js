const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

//auth user -> api/auth
router.post('/', 
    [
        check('email', 'Add a valid email').isEmail(),
        check('password', 'Password must have at least 6 characters').isLength({ min: 6 })
    ],
    authController.authUser
);

//get auth user
router.get('/', 
    auth,
    authController.authenticatedUser
);

module.exports = router;