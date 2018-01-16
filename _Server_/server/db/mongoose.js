// jshint esversion: 6

const mongoose = require('mongoose');
const { URI } = require('./database');

mongoose.Promise = global.Promise;

mongoose.connect(URI, {
    useMongoClient: true
}).then((res) => {
    console.log('Connection successful.');
}).catch((rej) => {
    console.log('An Error occurred while connecting.');
});

module.exports = { mongoose };