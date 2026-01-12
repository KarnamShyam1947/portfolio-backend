const express = require('express');
const { 
    getPublications, 
    createPublication, 
    getPublication, 
    updatePublication, 
    deletePublication 
} = require('../controllers/publication.controller');

const router = express.Router();

router.route('/')
    .get(getPublications)
    .post(createPublication);

router.route('/:id')
    .get(getPublication)
    .put(updatePublication)
    .delete(deletePublication);

module.exports = router;
