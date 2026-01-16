const express = require("express");
const { 
    getAllExperiences, 
    createExperience, 
    getExperience, 
    updateExperience, 
    deleteExperience 
} = require("../controllers/experience.controller");
const verifyToken = require("../middleware/auth.middleware");

const router = express.Router();

/**
 * @openapi
 * /api/v1/experience:
 *   post:
 *     tags:
 *       - Experience
 *     summary: Create an experience
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ExperienceApiSchema'
 *     responses:
 *       201:
 *         description: Created successfully
 *       400:
 *         description: Bad request
 */
router.post("/", verifyToken, createExperience);

/**
 * @openapi
 * /api/v1/experience:
 *   get:
 *     tags:
 *       - Experience
 *     summary: Get all experiences
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
 *         description: List of experiences
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ExperienceApiSchema'
 */
router.get("/", getAllExperiences);

/**
 * @openapi
 * /api/v1/experience/{id}:
 *   get:
 *     tags:
 *       - Experience
 *     summary: Get experience by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Experience ID
 *     responses:
 *       200:
 *         description: Experience found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ExperienceApiSchema'
 *       404:
 *         description: Experience not found
 */
router.get("/:id", getExperience);

/**
 * @openapi
 * /api/v1/experience/{id}:
 *   put:
 *     tags:
 *       - Experience
 *     summary: Update experience by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Experience ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ExperienceApiSchema'
 *     responses:
 *       200:
 *         description: Updated successfully
 *       404:
 *         description: Experience not found
 */
router.put("/:id", verifyToken, updateExperience);

/**
 * @openapi
 * /api/v1/experience/{id}:
 *   delete:
 *     tags:
 *       - Experience
 *     summary: Delete experience by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Experience ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Experience not found
 */
router.delete("/:id", verifyToken, deleteExperience);

module.exports = router;
