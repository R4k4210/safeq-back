const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { check } = require('express-validator');

//Create user -> api/user
router.post('/',
    [
        check('shopName', 'Shop name is a required value').not().isEmpty(),
        check('firstName', 'Name is a required value').not().isEmpty(),
        check('lastName', 'Last name is a required value').not().isEmpty(),
        check('phoneNumber', 'Phone number is a required value').not().isEmpty(),
        check('email', 'Add a valid email').isEmail(),
        check('password', 'Password must have at least 6 characters').isLength({ min: 6 })
    ],
    userController.createUser
);

module.exports = router;