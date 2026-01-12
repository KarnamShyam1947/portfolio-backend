const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    issuer: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    credentialId: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
}, { timestamps: true });

const certificate = mongoose.model('Certificate', certificateSchema);

module.exports = certificate;
