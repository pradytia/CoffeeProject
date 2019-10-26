const express = require('express')

const { cartController } = require('../controller')

const router = express.Router()

router.get('/getcart', cartController.getCart)
router.get('/getcart/:id', cartController.getCartId)
router.post('/addcart', cartController.addTocart)

module.exports = router