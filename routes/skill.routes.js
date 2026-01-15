const express = require('express');
const { getSkills, createSkill, getSkill, updateSkill, deleteSkill } = require('../controllers/skill.controller');

const router = express.Router();

router.get("/", getSkills)
router.post("/", createSkill);

router.get("/:id", getSkill)    
router.put("/:id", updateSkill)    
router.delete("/:id", deleteSkill); 

module.exports = router;
