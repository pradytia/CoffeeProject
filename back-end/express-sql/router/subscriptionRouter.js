const express =  require('express')

const { subscriptionController } = require('../controller')

const router = express.Router()

router.get('/artikel', subscriptionController.getArtikel)
router.get('/artikel/:id', subscriptionController.getArtikelId)
router.get('/material/:id', subscriptionController.getMaterial)
router.get('/step/:id', subscriptionController.getSteps)
router.get('/video', subscriptionController.getVideo)
router.get('/paket', subscriptionController.getPaketSubscription)
router.get('/paket/:id', subscriptionController.getPaketSubscriptionId)
router.get('/deskripsi', subscriptionController.getDeskripsiSubscription)
router.get('/deskripsi/:id', subscriptionController.getDeskripsiSubscriptionId)

module.exports = router

