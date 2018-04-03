// jshint esversion: 6
const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');
const cors = require('cors');
const _ = require('lodash');

const { mongoose } = require('./db/mongoose');
const { User } = require('./models/user');
const { authenticate } = require('./middleware/authenticate');
const config = require('./config/config.json');
const { getLetter } = require('./api/gestureToText');

const app = express(); // Init the app
app.use(bodyParser.json()); // Using the body parser middleware.
app.use(cors());

app.get('/', authenticate, (req, res) => {

    if (!req.user) {
        res.status(401).send({
            error: 'Unauthorized User'
        });
        return;
    }

    res.status(200).send({
        developedby: 'Team Return 0',
        app: 'Sign-Speaks',
        node: 'v9.2.0',
        version: '2.1.1'
    });
});

app.post('/users', (req, res) => {

    let body = _.pick(req.body, ['name', 'email', 'password', 'phoneNumber']);
    let _user = new User(body);

    _user.save().then((user) => {
        return user.generateAuthToken();
    }).then((token) => {
        res.status(201).send({
            status: 201,
            created: true,
            message: `Hello ${_user.name}, You've Successfully Registered To the System! Login To Continue.`,
            user: _user,
            token
        });
    }).catch((e) => {
        res.status(406).send({
            status: 406,
            created: false,
            error: e
        });
    });
});

app.post('/users/login', (req, res) => {

    User.findByCredentials(req.body.email, req.body.password).then((user) => {
        if (!user) {
            res.status(401).send({
                auth: false,
                message: 'Invalid Credentials.'
            });
            return;
        }

        return user.generateAuthToken().then(token => {
            res.status(200).send({
                auth: true,
                message: `Hello ${user.name}, Welcome To Your Sign-Speaks Application!`,
                user,
                token
            });
        })

    }).catch((error) => {
        res.status(404).send({
            auth: false,
            message: 'Oopsie It\'s Looks Like You\'ve Got Something Wrong!',
            error
        });
    });
});

app.get('/users', authenticate, (req, res) => {

    if (!req.user) {
        res.status(401).send({
            error: 'Unauthorized User'
        });
        return;
    }

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

app.get('/users/:id', authenticate, (req, res) => {

    if (!req.user) {
        res.status(401).send({
            error: 'Unauthorized User'
        });
        return;
    }

    let id = req.params.id;
    if (!ObjectID.isValid(id)) return res.status(404).send({
        status: 404,
        message: 'ObjectId_Is_Not_Valid'
    });

    User.findById(id).then(doc => {
        res.status(200).send(_.pick(doc, ['name', 'email', 'phoneNumber', 'statistics']));
    }).catch(error => {
        res.status(404).send({
            status: 404,
            message: 'Zero_Results',
            error
        });
    });
});

app.post('/users/me', authenticate, (req, res) => {
    if (req.user) {
        const user = req.user;
        res.status(200).send({
            name: user.name,
            email: user.email,
            phoneNumber: user.phoneNumber,
            statistics: user.statistics
        });
    }
});

app.post('/api/gtt', authenticate, (req, res) => {
    if (!req.user) {
        res.status(401).send({
            error: 'Unauthorized User'
        });
        return;
    }

    console.log("Body -> ", req.body);

    const body = req.body;
    let message = _.replace(body.message, "\n", "");
    const data = message.split(':');
    
    console.log("data -> ", data);

    let fingerData = _.slice(data, 0, data.length - 1);
    let totalAcc = data[data.length - 1];

    console.log("fingerData -> ", fingerData);
    console.log("totalAcc -> ", totalAcc);

    getLetter(totalAcc, [...fingerData]).then((word) => {
        res.status(200).send({
            word
        });
    }).catch((error) => {
        res.status(401).send({
            error
        });
    });;

});

app.listen(process.env.PORT || config.LOCAL_PORT, () => {
    console.log('Server started');
});

module.exports = { app };