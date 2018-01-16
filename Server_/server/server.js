// jshint esversion: 6

// LIB IMPORTS
const express = require('express');
const bodyParser = require('body-parser');
// LOCAL IMPORTS
const { mongoose } = require('./db/mongoose');
const { User } = require('./models/user');

const app = express();

// MIDDLEWARE 
app.use(bodyParser.json());

// ROUTES
app.post('/users', (req, res) => {

    let user = new User({
        name: req.body.name,
        email: req.body.email,  
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        operations: req.body.operations
    });

    user.save().then((doc) => {
        res.status(200).send({
            status: 200,
            saved: true
        });
    }).catch((error) => {
        res.status(400).send({
            status: 400,
            saved: false,
            error: error
        });
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is up.');
});