// jshint esversion: 6

const mongoose = require('mongoose');
const { URI } = require('../config/config');

mongoose.Promise = global.Promise;

mongoose.connect(URI, {
    useMongoClient: true
}).then((res) => {
    console.log('Connection established.');
}).catch((rej) => {
    console.log('An Error occurred while connecting.');
});

module.exports = { mongoose };