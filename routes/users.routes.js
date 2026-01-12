const { changePassword } = require('../controllers/user.controller');
const verifyToken = require('../middleware/auth.middleware');

const express = require('express');

const router = express.Router();

router.post('/change-password', verifyToken, changePassword);

module.exports = router;
