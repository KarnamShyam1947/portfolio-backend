const mongoose = require('mongoose');

const homeSectionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    primaryButtonText: {
        type: String,
        required: true
    },
    primaryButtonLink: {
        type: String,
        required: true
    },
    secondaryButtonText: {
        type: String,
        required: true
    },
    secondaryButtonLink: {
        type: String,
        required: true
    },
    typingPhrases: {
        type: [String],
        required: true
    }
}, { timestamps: true });

const HomeSection = mongoose.model('HomeSection', homeSectionSchema);

module.exports = HomeSection;
