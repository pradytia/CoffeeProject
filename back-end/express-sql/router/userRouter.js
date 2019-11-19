const { userController } = require('../controller');
const { auth, authEmail } = require('../helpers/auth');

const express = require('express');

const router = express.Router()

router.post('/register', userController.register)
router.post('/confirmemail', authEmail, userController.confirmEmail)
router.post('/resendemail', userController.resendEmail)
router.post('/keeplogin', auth, userController.keepLogin)
router.post('/login', userController.login)
router.get('/counttotaluser', userController.countTotalUser)
router.get('/counttotalsubs', userController.countTotalUserSubs)
router.get('/counttotaltrx', userController.countTotalTrx)

module.exports = router 