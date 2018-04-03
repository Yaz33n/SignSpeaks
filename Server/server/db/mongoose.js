// jshint esversion: 6
const mongoose = require('mongoose');
// Configuration file
const config = require('../config/config.json');

// Using default global promises for mongoose promise.
mongoose.Promise = global.Promise;

// Connecting to the Mongo Database
mongoose.connect(config.MONGODB_URI, {
    useMongoClient: true // Using the native mongo client driver.
}).then((s) => { // Success case
    console.log('Connection established.', s);
}).catch((e) => { // Error case
    console.log('An Error occurred while connecting.', e);
});

module.exports = { mongoose }; // Enabling the module for other modules.