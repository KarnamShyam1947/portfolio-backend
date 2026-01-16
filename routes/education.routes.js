const express = require("express");
const {
    getEducations,
    createEducation,
    getEducation,
    updateEducation,
    deleteEducation
} = require("../controllers/education.controller");
const verifyToken = require("../middleware/auth.middleware");

const router = express.Router();

/**
 * @openapi
 * /api/v1/education:
 *   post:
 *     tags:
 *       - Education
 *     summary: Create Education
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EducationApiSchema'
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad request
 */
router.post("/", verifyToken, createEducation);

/**
 * @openapi
 * /api/v1/education:
 *   get:
 *     tags:
 *       - Education
 *     summary: Get all educations
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Maximum number of records to return
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number for pagination
 *     responses:
 *       200:
 *         description: List of educations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/EducationApiSchema'
 */
router.get("/", getEducations);

/**
 * @openapi
 * /api/v1/education/{id}:
 *   get:
 *     tags:
 *       - Education
 *     summary: Get education by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Education ID
 *     responses:
 *       200:
 *         description: Education found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EducationApiSchema'
 *       404:
 *         description: Education not found
 */
router.get("/:id", getEducation);

/**
 * @openapi
 * /api/v1/education/{id}:
 *   put:
 *     tags:
 *       - Education
 *     summary: Update education by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Education ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EducationApiSchema'
 *     responses:
 *       200:
 *         description: Updated successfully
 *       404:
 *         description: Education not found
 */
router.put("/:id", verifyToken, updateEducation);

/**
 * @openapi
 * /api/v1/education/{id}:
 *   delete:
 *     tags:
 *       - Education
 *     summary: Delete education by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Education ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Education not found
 */
router.delete("/:id", verifyToken, deleteEducation);

module.exports = router;
