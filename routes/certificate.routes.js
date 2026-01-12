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
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 */
router.get("/", getCertificates);
router.post("/", createCertificate);

router.get("/:id", getCertificate);
router.put("/:id", updateCertificate);
router.delete("/:id", deleteCertificate);

module.exports = router;
