const express = require("express");
const {
    getEducations,
    createEducation,
    getEducation,
    updateEducation,
    deleteEducation
} = require("../controllers/education.controller");

const router = express.Router();

router.route("/")
    .get(getEducations)
    .post(createEducation);

router.route("/:id")
    .get(getEducation)
    .put(updateEducation)
    .delete(deleteEducation);

module.exports = router;
