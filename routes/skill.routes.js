const express = require('express');
const { getSkills, createSkill, getSkill, updateSkill, deleteSkill } = require('../controllers/skill.controller');

const router = express.Router();

router.route('/')
    .get(getSkills)
    .post(createSkill);

router.route('/:id')
    .get(getSkill)    
    .put(updateSkill)    
    .delete(deleteSkill); 

module.exports = router;
