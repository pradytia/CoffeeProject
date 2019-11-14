const express = require('express')

const { cartController } = require('../controller')

const router = express.Router()

router.get('/getcart', cartController.getCart)
router.get('/getcartId/:id', cartController.getCartId)
router.get('/getcartw/:id', cartController.getCartWithoutJoin)
router.get('/gettrxitem/:id', cartController.getTransactionItemId)
router.post('/addcart', cartController.addTocart)
router.put('/editcart/:id', cartController.editCart)
router.get('/datacustomer/:id', cartController.getDataCustomer)
router.post('/datacustomer', cartController.addDataCustomer)
router.get('/totalprice', cartController.totalPrice)
router.post('/checkout/:id', cartController.cartCheckOut)
router.delete('/deletecart/:id', cartController.deleteCart)
router.get('/history/:id', cartController.getHistoryId)
router.get('/historydetails/:id', cartController.getHistoryDetailsId)
router.put('/uploadimage/:id', cartController.addImageUpload) 

module.exports = router