const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
    degree: {
        type: String,
        required: true
    },
    institution: {
        type: String,
        required: true
    },
    period: {
        type: String,
        required: true
    },
    points: {
        type: [String],
        required: true
    }
}, { timestamps: true });

const Education = mongoose.model('Education', educationSchema);

module.exports = Education;
