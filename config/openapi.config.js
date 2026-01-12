/**
 * @openapi
 * components:
 *   schemas:
 *     LoginRequest:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: The user's email.
 *           example: username@example.com
 *         password:
 *           type: string
 *           description: The user's password.
 *           example: password123
 * 
 *     certificate:
 *       type: object
 *       required:
 *         - title
 *         - issuedBy
 *         - dateIssued
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the certificate.
 *           example: Certified Web Developer
 *         issuedBy:
 *           type: string
 *           description: The entity that issued the certificate.
 *           example: Online Learning Platform
 *         dateIssued:
 *           type: string
 *           format: date
 *           description: The date the certificate was issued.
 *           example: 2023-01-15
 */