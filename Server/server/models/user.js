// jshint esversion: 6
// User model to hold all user specific data. 

/**
 * Importing all the dependencies
 */
const validator = require('validator'); // Validator module
const mongoose = require('mongoose'); // Schema module
const _ = require('lodash'); // Util module
const bcryptjs = require('bcryptjs'); // Hashing algorithm for PWs
const JWT = require('jsonwebtoken'); // Token generator for REST Client
const config = require('../config/config.json'); // Applicaion Configuration

// Defining the schema
let UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Username is required. (3 Chars atleast)'],
        minLength: 3
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate: {
            validator: value => validator.isEmail(value),
            message: '{VALUE} is not a valid email address.'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Minimum 6 char password.']
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
        maxlength: 10,
        minlength: 10
    },
    statistics: {
        type: Object,
        default: {
            signs: 0,
            words: []
        }
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

/**
 * Model Specfic method (Just like Static methods)
 * Finds a particular user by their credentials.
 */
UserSchema.statics.findByCredentials = function (email, password) {

    let User = this;
    return User.findOne({ email }).then((user) => {

        if (!user) return Promise.reject('No Such User Found!');

        return new Promise((resolve, reject) => {
            bcryptjs.compare(password, user.password).then(result => {
                if (result)
                    resolve(user); // Resolve the promise with the user
                else
                    reject('Invalid Password');
            }).catch(err => {
                reject(err);
            });
        })
    });
};

/**
 * Finds a User where if a given token matches.
 * # Verify the token with the Application SECRET
 */
UserSchema.statics.findByToken = function (token) {
    let User = this;
    let decodedToken;

    try {
        decodedToken = JWT.verify(token, config.JWT_SECRET);
    } catch (exception) {
        return Promise.reject('Invalid Token!');
    }

    return User.findOne({
        '_id': decodedToken._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    });
};

// Encrypting the password before saving the user object.
UserSchema.pre('save', function (next) {

    let user = this;
    if (user.isModified('password')) {
        bcryptjs.genSalt(5, (err, salt) => {
            bcryptjs.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});

// Overriding toJSON method
UserSchema.methods.toJSON = function () {
    return _.pick(this.toObject(), [/*'_id',*/ 'name', 'email']);
};

// Generating auth tokens for users.
UserSchema.methods.generateAuthToken = function () {
    let user = this;
    let _access = 'auth';
    let token = JWT.sign(
        { _id: user._id.toHexString(), access: _access },
        config.JWT_SECRET).toString();

    // Pushing the user generated tokens for user object in the model
    user.tokens.push({ access: _access, token });

    return user.save().then(() => {
        return token; // keep alive promise chain
    });
};

const User = mongoose.model('Users', UserSchema); // Building the collection
module.exports = { User };