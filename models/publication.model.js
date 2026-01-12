const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    authors: {
        type: [String],
        required: true,
    },
    journal: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    doi: {
        type: String,
    },
    keywords: {
        type: [String],
        required: true,
    },
    type: {
        type: String,
        enum: ['journal', 'conference', 'preprint'],
        default: "conference",
    },
    status: {
        type: String,
        enum: ['published', 'accepted', 'under-review'],
        default: 'under-review',
    },
    link: {
        type: String,
    },
}, { timestamps: true });

const Publication = mongoose.model('Publications', publicationSchema);

module.exports = Publication;
