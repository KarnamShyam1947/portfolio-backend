const express = require("express");
const {
    getEducations,
    createEducation,
    getEducation,
    updateEducation,
    deleteEducation
} = require("../controllers/education.controller");

const router = express.Router();

/**
 * @openapi
 * /api/v1/Education:
 *   post:
 *     tags:
 *       - Education
 *     summary: Create Education
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EducationRequest'
 *     responses:
 *       201:
 *         description: Created
 */
router.post("/", createEducation);
router.get("/", getEducations)

router.get("/:id", getEducation)
router.put("/:id", updateEducation)
router.delete("/:id", deleteEducation);

module.exports = router;
