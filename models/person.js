const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    profession: {
        type: String,
        enum: ['chef','waiter','manager'],
        required: true
    }
})

// add a comment

const Person = mongoose.model('Person',personSchema);

module.exports = Person;