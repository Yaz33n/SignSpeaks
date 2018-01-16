// jshint esversion: 6

const mongoose = require('mongoose');
const User = mongoose.model('Users', {
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        maxLength: 15
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
        maxLength: 10,
        minLength: 10
    },
    operations: {
        signsConverted: Number,
        words: Object,
        require: false
    }
});

module.exports = { User };