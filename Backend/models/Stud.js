const mongoose = require('mongoose')
const { Schema } = mongoose;

const StudSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    program: {
        type: String,
        required: true,
    },
    maritialStatus: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// console.log(StudSchema); // Debugging statement

module.exports = mongoose.model('stud', StudSchema);