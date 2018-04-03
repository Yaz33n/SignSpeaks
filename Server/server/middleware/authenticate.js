const { User } = require('../models/user');

// This middleware is responsible to proect the REST API from 
// unknown users. authenticate is a middleware where its checks 
// for a unique token so the server know what user requested 
// resource.
let authenticate = (req, res, next) => {

    const token = req.header('x-auth'); // Fetches the token from the request
    User.findByToken(token).then(user => {
        if (!user) { // If no user reject this promise.
            return Promise.reject('Unauthorized User!')
        }
        req.user = user; // Pass user object to next middleware
        req.token = token; // Pass user object to next middleware
        next(); // Call the next middleware
    }).catch((e) => { // Send error back to client
        res.status(401).send({
            status: 'ZERO_RESULTS',
            error: e
        });
    });
}

module.exports = {
    authenticate
}