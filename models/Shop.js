const mongoose = require('mongoose');

const ShopSchema = mongoose.Schema({
    shopName: {
        type: String,
        required: true,
        trim: true,        
    },
    shopLogo: {
        type: String,
        required: true,
        trim: true,        
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true, 
        trim: true,        
    },
    createdDate: {
        type: Date, 
        default: Date.now()
    },
});

module.exports = mongoose.model('shops', ShopSchema);