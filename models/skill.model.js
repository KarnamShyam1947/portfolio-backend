const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    }
}, { timestamps: true });

const Skill = mongoose.model('Skills', skillSchema);

module.exports = Skill;
