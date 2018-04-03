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