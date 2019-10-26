const express = require('express')

const { productController } = require('../controller')

const router = express.Router()

router.get('/getbrewer', productController.getBrewer)
router.get('/getbrewer/:id', productController.getBrewerId)
router.get('/getequipment', productController.getEquipment)
router.get('/getequipment/:id', productController.getEquipmentId)
router.get('/getgift', productController.getGift)
router.get('/getgift/:id', productController.getGiftId)
router.get('/getkopi', productController.getKopi)
router.get('/getkopi/:id', productController.getKopiId)
router.get('/gettool', productController.getTool)
router.get('/gettool/:id', productController.getToolId)
router.get('/paketusaha',productController.getPaketUsaha)
router.get('/paketusaha/:id',productController.getPaketusahaId)

module.exports = router