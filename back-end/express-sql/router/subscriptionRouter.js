const express =  require('express')

const { subscriptionController } = require('../controller')

const router = express.Router()

router.get('/seduh', subscriptionController.getSeduhBox)

module.exports = router

