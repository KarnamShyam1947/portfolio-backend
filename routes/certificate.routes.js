const express = require("express");
const { 
    getCertificates, 
    createCertificate, 
    getCertificate, 
    updateCertificate, 
    deleteCertificate 
} = require("../controllers/certificate.controller");
const verifyToken = require("../middleware/auth.middleware");

const router = express.Router();

/**
 * @openapi
 * /api/v1/certificate:
 *   post:
 *     tags:
 *       - Certificate
 *     summary: Create Certificate
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CertificateApiSchema'
 *     responses:
 *       201:
 *         description: Created
 *       409:
 *         description: Certificate already exists
 */
router.post("/", verifyToken, createCertificate);

/**
 * @openapi
 * /api/v1/certificate:
 *   get:
 *     tags:
 *       - Certificate
 *     summary: Get all certificates
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Maximum number of certificates to return
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number for pagination
 *     responses:
 *       200:
 *         description: A list of certificates
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CertificateApiSchema'
 */
router.get("/", getCertificates);

/**
 * @openapi
 * /api/v1/certificate/{id}:
 *   get:
 *     tags:
 *       - Certificate
 *     summary: Get certificate by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Certificate ID
 *     responses:
 *       200:
 *         description: Certificate found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CertificateApiSchema'
 *       404:
 *         description: Certificate not found
 */
router.get("/:id", getCertificate);

/**
 * @openapi
 * /api/v1/certificate/{id}:
 *   put:
 *     tags:
 *       - Certificate
 *     summary: Update certificate by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Certificate ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CertificateApiSchema'
 *     responses:
 *       200:
 *         description: Updated successfully
 *       404:
 *         description: Certificate not found
 */
router.put("/:id", verifyToken, updateCertificate);

/**
 * @openapi
 * /api/v1/certificate/{id}:
 *   delete:
 *     tags:
 *       - Certificate
 *     summary: Delete certificate by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Certificate ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Certificate not found
 */
router.delete("/:id", verifyToken, deleteCertificate);

module.exports = router;
