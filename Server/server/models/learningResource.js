/**
 * Author : Yazeen Thariq
 * Last Edited: 2018/03/22
 * 
 * This Collection is not 100% completed yet
 * I need to add all the custom model and schema
 * methods in order to get this working correctly.
 */

 // Imports
const mongoose = require('mongoose');

let ResourceSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    article: [{
        articleImage: {
            type: Buffer,
            required: false
        },
        articleTitle: {
            type: String,
            required: true
        },
        articleBody: {
            type: String,
            required: true
        },
        createdDate: {
            type: Date, 
            default: Date.now
        }
    }],
});

const Resource = mongoose.model('Resources', ResourceSchema); // Building the collection
module.exports = { Resource };