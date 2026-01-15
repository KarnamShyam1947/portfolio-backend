const express = require("express");
const { 
    getAllExperiences, 
    createExperience, 
    getExperience, 
    updateExperience, 
    deleteExperience } = require("../controllers/experience.controller");

const router = express.Router();

router.get("/", getAllExperiences)
router.post("/", createExperience);

router.get("/:id", getExperience)
router.put("/:id", updateExperience)
router.delete("/:id", deleteExperience);

module.exports = router;