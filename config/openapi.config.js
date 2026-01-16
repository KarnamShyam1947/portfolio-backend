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
 *     ChangePasswordRequest:
 *       type: object
 *       required:
 *         - currentPassword
 *         - newPassword
 *         - reEnterPassword
 *       properties:
 *         currentPassword:
 *           type: string
 *           description: The user's Current Password.
 *           example: password123
 *         newPassword:
 *           type: string
 *           description: The user's New Password.
 *           example: password123
 *         reEnterPassword:
 *           type: string
 *           description: The user's New Password Confirmation.
 *           example: password123
 * 
 *     CertificateApiSchema:
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
 *     EducationApiSchema:
 *       type: object
 *       required:
 *         - degree
 *         - institution
 *         - period
 *         - points
 *       properties:
 *         degree:
 *           type: string
 *           description: The name of the degree or qualification.
 *           example: Bachelor of Science in Computer Science
 *         institution:
 *           type: string
 *           description: The name of the educational institution.
 *           example: Indian Institute of Technology Delhi
 *         period:
 *           type: string
 *           description: The time period of the education.
 *           example: 2019-08 to 2023-05
 *         points:
 *           type: array
 *           items:
 *             type: string
 *           description: Key highlights or achievements.
 *           example:
 *             - Point 1
 *             - Point 2
 *             - Point 3
 * 
 *     ExperienceApiSchema:
 *       type: object
 *       required:
 *         - role
 *         - company
 *         - period
 *         - points
 *       properties:
 *         role:
 *           type: string
 *           description: The job title or role held.
 *           example: Software Engineer
 *         company:
 *           type: string
 *           description: The company or organization name.
 *           example: Tech Solutions Ltd
 *         period:
 *           type: string
 *           description: The period of employment.
 *           example: 2022-03 to 2024-01
 *         points:
 *           type: array
 *           items:
 *             type: string
 *           description: Key responsibilities or achievements.
 *           example:
 *             - Point 1
 *             - Point 2
 *             - Point 3
 */
