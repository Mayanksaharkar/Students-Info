const mongoose = require('mongoose')
const { Schema } = mongoose;

const StudSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
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
    dob: {
        type: Date,
        required: false,
    },
    program: {
        type: String,
        required: true,
    },
    maritalStatus: {
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