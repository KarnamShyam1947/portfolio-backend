const express = require("express");
const { 
    getCertificates, 
    createCertificate, 
    getCertificate, 
    updateCertificate, 
    deleteCertificate 
} = require("../controllers/certificate.controller");

const router = express.Router();

/**
 * @openapi
 * /api/v1/certificate:
 *   post:
 *     tags:
 *       - Certificate
 *     summary: Create Certificate
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CertificateRequest'
 *     responses:
 *       201:
 *         description: Created
 *       409:
 *         description: Certificate already exists
 */
router.post("/", createCertificate);
router.get("/", getCertificates);

router.get("/:id", getCertificate);
router.put("/:id", updateCertificate);
router.delete("/:id", deleteCertificate);

module.exports = router;
