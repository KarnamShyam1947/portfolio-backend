const { changePassword } = require('../controllers/user.controller');
const verifyToken = require('../middleware/auth.middleware');

const express = require('express');

const router = express.Router();

/**
 * @openapi
 * /api/v1/user/change-password:
 *   post:
 *     tags:
 *       - User
 *     summary: Change Admin Password
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ChangePasswordRequest'
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 *       403:
 *         description: Forbidden
 */
router.post('/change-password', verifyToken, changePassword);

module.exports = router;
