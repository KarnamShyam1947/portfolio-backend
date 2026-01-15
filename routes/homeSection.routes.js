const express = require('express');
const {
    getHomeSection,
    updateHomeSection,
    deleteHomeSection
} = require('../controllers/homeSection.controller');

const router = express.Router();

router.get("/", getHomeSection)
router.put("/", updateHomeSection)
router.delete("/", deleteHomeSection);

module.exports = router;
