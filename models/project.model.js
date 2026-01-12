const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    images: {
        type: [
            {
                url: { type: String, required: true },
                subtitle: { type: String, required: true }
            }
        ],
        required: true
    },
    categories: {
        type: [String],
        enum: ['all', 'web', 'aiml', 'blockchain', 'devops'],
        required: true
    },
    technologies: {
        type: [String],
        required: true
    },
    liveUrl: {
        type: String,
        default: null
    },
    githubUrl: {
        type: String,
        default: null
    },
    featured: {
        type: Boolean,
        default: false
    },
    overview: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
