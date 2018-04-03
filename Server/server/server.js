// jshint esversion: 6

/**
 * A Lightweight REST API For the sign speaks mobile application.
 * Author : Yazeen Thariq.
 * Last Edited : 2018/4/3
 * 
 * Global Library Imports for the REST API
 */
const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');
const cors = require('cors');
const _ = require('lodash');

/**
 * Local Resources Imports for the REST API
 */
const { mongoose } = require('./db/mongoose');
const { User } = require('./models/user');
const { authenticate } = require('./middleware/authenticate');
const config = require('./config/config.json');
const { getLetter } = require('./api/gestureToText');

/**
 * There are two main Security Issues that I need to fix in 
 * this REST API those are :-
 * 
 * 1. This server must run on HTTPS in production for security concerns &
 *    this server needs a valid credentials for https.
 *     - certificate
 *     - Use of CORS (GET/POST)
 *     - privatekey and CSR
 *     - need a permanent domain for our app
 * 
 * ISSUE STATUS        : DID NOT RESOLVED YET.
 * ISSUE UPHOLDED BY   : Mohomad Yazeen Thariq
 * --------------------------------------------------------------------
 * 
 * 2. Generate Authentication system before consuming the
 *    REST API.
 *      - Add JSON Web tokens
 *      - Provide users accessible tokens
 *      - Save user tokens
 * 
 * ISSUE STATUS        : RESOLVED
 * ISSUE RESOLVED BY   : Mohomad Yazeen Thariq
 * RESOLVING MECHANISM : Used open JWT library for create tokens
 *                       and used the token to authenticate to the
 *                       API via creating a middleware.
 * --------------------------------------------------------------------
 * 
 * 3. Encrypt the password before saving the user
 *    document.
 *      - use SHA256 Algorithm to hash the password
 *      - Use a auto generated hash for each password
 * 
 * ISSUE STATUS        : RESOLVED
 * ISSUE RESOLVED BY   : Mohomad Yazeen Thariq
 * RESOLVING MECHANISM : Used open bcryptjs library for hashing the 
 *                       password. (with auto salting)
 */

const app = express(); // Init the express app
app.use(bodyParser.json()); // Using the body parser middleware.
app.use(cors()); // Resolving cors Access issues for the server.

/**
 * Route Visibility = Private
 * 
 * GET /
 * This route only serves up the API details. But for
 * access this route the client should be authenticated first.
 * 
 * Expected: 
 * HEADERS = { x-auth: token }
 * 
 * @param {String}    #1 Endpoint URI
 * @param {Function}  #2 Custom Authentication Middleware.
 * @param {Function}  #3 Callback function for the Request and the Response object.
 */
app.get('/', authenticate, (req, res) => {

    // Check whether the user is authenticated or not.
    if (!req.user) {
        res.status(401).send({
            error: 'Unauthorized User'
        }); // Bad Request
        return;
    }

    res.status(200).send({
        developedby: 'Team Return 0',
        app: 'Sign-Speaks',
        node: 'v9.2.0',
        version: '2.1.1'
    }); // Status OK
});

/**
 * Route Visibility = Public
 * 
 * POST /users
 * This route will allow a client to register a user to the 
 * System. With the give details the server expects a JSON
 * object in the payload.
 * 
 * Expected: 
 * HEADERS = {}
 * BODY = {
 *    "name": "A valid Name",
 *    "email": "A valid unique Email",
 *    "password": "A valid password",
 *    "phoneNumber": "A valid phoneNumber"
 * }
 * 
 * @param {String}    #1 Endpoint URI
 * @param {Function}  #2 Callback function for the Request and the Response object.
 */
app.post('/users', (req, res) => {

    let body = _.pick(req.body, ['name', 'email', 'password', 'phoneNumber']);
    let _user = new User(body);

    _user.save().then((user) => { // Saving the user.
        return user.generateAuthToken(); // Generating a auth token.
    }).then((token) => {
        res.status(201).send({
            status: 201,
            created: true,
            message: `Hello ${_user.name}, You've Successfully Registered To the System! Login To Continue.`,
            user: _user,
            token
        }); // Send OK Created Response
    }).catch((e) => {
        res.status(406).send({
            status: 406,
            created: false,
            error: e
        }); // Send Not Acceptable Response
    });
});

/**
 * Route Visibility = Public
 * 
 * POST /users/login
 * This route will allow a client to login to the
 * System.
 * 
 * Expected: 
 * HEADERS = {}
 * BODY = {
 *    "email": "A existing Email",
 *    "password": "A valid password"
 * }
 * 
 * @param {String}    #1 Endpoint URI
 * @param {Function}  #2 Callback function for the Request and the Response object.
 */
app.post('/users/login', (req, res) => {

    // Check for a user wit given credentials.
    User.findByCredentials(req.body.email, req.body.password).then((user) => {
        if (!user) {
            res.status(401).send({
                auth: false,
                message: 'Invalid Credentials.'
            });
            return;
        }

        // Generate a new auth token
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

/**
 * Route Visibility = Private
 * 
 * GET /users
 * This route will allow a client to see all the registered
 * users in the system.
 * 
 * Expected: 
 * HEADERS = { x-auth: token }
 * BODY = {}
 * 
 * @param {String}    #1 Endpoint URI
 * @param {String}    #2 Custom Authentication Middleware.
 * @param {Function}  #3 Callback function for the Request and the Response object.
 */
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

/**
 * Route Visibility = Private
 * 
 * GET /users/:id
 * This route will allow a client to see their or other
 * registered people's non-sensitive details with a given valid
 * object id.
 * 
 * Expected: 
 * HEADERS = { x-auth: token }
 * PARAM = { id: id }
 * BODY = {}
 * 
 * @param {String}    #1 Endpoint URI
 * @param {String}    #2 Custom Authentication Middleware.
 * @param {Function}  #3 Callback function for the Request and the Response object.
 */
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

/**
 * Route Visibility = Private
 * 
 * POST /users/me
 * This route will allow a client to see their non-sensitive 
 * details with a given token.
 * 
 * Expected: 
 * HEADERS = { x-auth: token }
 * PARAM = {}
 * BODY = {}
 * 
 * @param {String}    #1 Endpoint URI
 * @param {String}    #2 Custom Authentication Middleware.
 * @param {Function}  #3 Callback function for the Request and the Response object.
 */
app.post('/users/me', authenticate, (req, res) => {
    if (req.user) {
        const user = req.user;
        res.status(200).send(
            _.pick(user, ['name', 'email', 'phoneNumber', 'statistics'])
        );
    } else {
        res.status(401).send(
            {
                status: 401,
                message: 'Invalid_Token'
            }
        );
    }
});

/**
 * Route Visibility = Private
 * 
 * POST /api/gtt
 * This route will allow a client to use the gesture to text
 * conversion api. And sends back and output to the client.
 * 
 * Expected: 
 * HEADERS = { x-auth: token }
 * PARAM = {}
 * BODY = {
 *    message : "Sensor Data"
 * }
 * 
 * @param {String}    #1 Endpoint URI
 * @param {Function}  #2 Custom Authentication Middleware.
 * @param {Function}  #3 Callback function for the Request and the Response object.
 */
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
}); // Starts the server on production mode

module.exports = { app }; // exports the app