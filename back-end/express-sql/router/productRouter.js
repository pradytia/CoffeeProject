const express = require('express')

const { productController } = require('../controller')

const router = express.Router()

router.get('/getproducts', productController.getProduct)
router.get('/searchproduct', productController.getSeacrhProduct)
router.get('/jenis', productController.getJenis)
router.put('/editproduct/:id', productController.editProduct)
router.delete('/deleteproduct/:id', productController.deleteProduct)
router.post('/addproduct', productController.addProduct)
router.get('/getbrewer', productController.getBrewer)
router.get('/getproduct/:id', productController.getProductId)
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
router.get('/wishlist', productController.getWishlist)
router.delete('/wishlist/:id', productController.deleteWishlist)
router.post('/wishlist', productController.addWishlist)

module.exports = router