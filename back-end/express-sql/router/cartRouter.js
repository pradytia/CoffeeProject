const express = require('express')

const { cartController } = require('../controller')

const router = express.Router()

router.get('/getcart', cartController.getCart)
router.get('/getcartId/:id', cartController.getCartId)
router.get('/getcartw/:id', cartController.getCartWithoutJoin)
router.post('/addcart', cartController.addTocart)
router.put('/editcart/:id', cartController.editCart)
router.get('/datacustomer/:id', cartController.getDataCustomer)
router.post('/datacustomer', cartController.addDataCustomer)
router.get('/totalprice', cartController.totalPrice)

module.exports = router