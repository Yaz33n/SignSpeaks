// jshint esversion: 6

const validator = require('validator');
const mongoose = require('mongoose');
const _ = require('lodash');
const $ = require('bcryptjs');

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
    }
});

UserSchema.pre('save', function (next) {
    let user = this;

    if (user.isModified('password')) {
        $.genSalt(5, (err, salt) => {
            $.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});

UserSchema.methods.toJSON = function () {
    return _.pick(this.toObject(), ['_id', 'email']);
};

// UserSchema.methods.generateAuthToken = function () {
//     let user = this;
//     let access = 'auth';
//     let token = JWT.sign({_id: user._id.toHexString(), access}, 'abc123').toString();
//     user.tokens.push({access, token});

//     return user.save().then(() => {
//         return token;
//     });
// };

const User = mongoose.model('Users', UserSchema);
module.exports = { User };