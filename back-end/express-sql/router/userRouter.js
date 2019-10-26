const { userController } = require('../controller');
const { auth } = require('../helpers/auth');

const express = require('express');

const router = express.Router()

router.post('/register', userController.register)
router.post('/confirmemail', userController.confirmEmail)
router.post('/resendemail', userController.resendEmail)
router.post('/keeplogin', auth, userController.keepLogin)
router.post('/login', userController.login)

module.exports = router