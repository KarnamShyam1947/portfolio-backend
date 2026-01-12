const express = require("express");
const { 
    getAllExperiences, 
    createExperience, 
    getExperience, 
    updateExperience, 
    deleteExperience } = require("../controllers/experience.controller");

const router = express.Router();

router.route("/")
    .get(getAllExperiences)
    .post(createExperience);

router.route("/:id")
    .get(getExperience)
    .put(updateExperience)
    .delete(deleteExperience);

module.exports = router;