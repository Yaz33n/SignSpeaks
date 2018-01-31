// jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const {
    ObjectID
} = require('mongodb');
const _ = require('lodash');
const $ = require('bcryptjs');
const {
    mongoose
} = require('./db/mongoose');
const {
    User
} = require('./models/user');
const fs = require('fs');

const app = express(); // Init the app
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send({
        developedby: 'Team Return 0',
        app: 'Sign-Speaks',
        node: 'v9.2.0',
        version: '1.0.5'
    });
});

app.post('/users', (req, res) => {

    let user = _.pick(req.body, ['name', 'email', 'password', 'phoneNumber']);
    let _user = new User(user);

    _user.save().then(() => {
        res.status(200).send({
            status: 200,
            saved: true,
            user: _user
        });
    }).catch((e) => {
        res.status(400).send({
            status: 400,
            saved: false,
            error: e
        });
    });
});

app.get('/users', (req, res) => {
    User.find().then((users) => {
        res.status(200).send({
            users
        });
    }).catch((error) => {
        res.status(400).send({
            error
        });
    });
});

app.get('/users/:id', (req, res) => {

    let id = req.params.id;
    if (!ObjectID.isValid(id)) return res.status(400).send({
        status: 'INVALID_ID'
    });

    User.findById(id).then(doc => {
        res.status(200).send(_.pick(doc, ['name', 'email', 'phoneNumber', 'statistics']));
    }).catch(error => {
        res.status(404).send({
            status: 'ZERO_RESULTS',
            error
        });
    });

});

app.post('/users/login', (req, res) => {

    User.find({
        email: req.body.email
    }).then((user) => {

        $.compare(req.body.password, user[0].password).then(result => {
            if (result) {
                res.status(200).send({
                    auth: result,
                    credentials: 'VALID',
                    userID: user[0]._id
                });
            } else {
                res.status(404).send({
                    auth: result,
                    credentials: 'INVALID'
                });
            }
        }).catch(err => {
            res.status(400).send({
                error: err
            });
        });

    }).catch((error) => {
        res.status(400).send({
            error
        });
    });
});

app.post('/api/stt', (req, res) => {
    res.status(200).send({
        api: 'Speech to text',
        expected_data: 'FLAC audio file',
        status: 'NOT IMPLEMENTED'
    });

    // Call to GS API
});

app.post('/api/gtt', (req, res) => {

    var val = req.body.value;
    fs.readFile('Server/server/api/dictionary.json', 'UTF-8', (err, data) => {
        
        if (err) throw err;
        res.status(200).send({
            status: 200,
            results: JSON.parse(data)[0][val]
        });
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started');
});

module.exports = {
    app
};