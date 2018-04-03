const mongoose = require('mongoose');

let SignSchema = new mongoose.Schema({
    resistence: {
        type: Number,
        required: true
    }, bend: [{
        finger_1: {
            type: Number,
            required: true
        },
        finger_2: {
            type: Number,
            required: true
        },
        finger_3: {
            type: Number,
            required: true
        },
        finger_4: {
            type: Number,
            required: true
        },
        finger_5: {
            type: Number,
            required: true
        }
    }]
});