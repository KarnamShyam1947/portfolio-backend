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
 *     CertificateRequest:
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
 * 
 *     EducationRequest:
 *       type: object
 *       required:
 *         - degree
 *         - institution
 *         - period
 *         - points
 *       properties:
 *         degree:
 *           type: string
 *           description: The name of the degree or qualification obtained or being pursued.
 *           example: Bachelor of Science in Computer Science
 *         institution:
 *           type: string
 *           description: The name of the educational institution where the degree was completed or is being pursued.
 *           example: Indian Institute of Technology Delhi
 *         period:
 *           type: string
 *           description: The time period during which the education was or is being completed (e.g., start and end dates).
 *           example: 2019-08 to 2023-05
 *         points:
 *           type: array
 *           items:
 *             type: string
 *           description: A list of key highlights, achievements, or details about the degree (e.g., GPA, major projects).
 *           example:
 *             - GPA - 9.2/10
 *             - Major project - Machine Learning based Recommendation System
 *             - Relevant coursework - Data Structures, Algorithms, Databases
 */
