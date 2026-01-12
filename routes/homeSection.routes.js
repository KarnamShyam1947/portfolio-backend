const express = require('express');
const {
    getHomeSection,
    updateHomeSection,
    deleteHomeSection
} = require('../controllers/homeSection.controller');

const router = express.Router();

router.route('/')
    .get(getHomeSection)
    .put(updateHomeSection)
    .delete(deleteHomeSection);

module.exports = router;
