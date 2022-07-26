const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    name: {
        type: String,
    },

});

module.exports = mongoose.model('Room', sensorSchema);