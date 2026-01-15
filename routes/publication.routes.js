const express = require('express');
const { 
    getPublications, 
    createPublication, 
    getPublication, 
    updatePublication, 
    deletePublication 
} = require('../controllers/publication.controller');

const router = express.Router();

router.get("/", getPublications)
router.post("/", createPublication);

router.get("/:id", getPublication)
router.put("/:id", updatePublication)
router.delete("/:id", deletePublication);

module.exports = router;
