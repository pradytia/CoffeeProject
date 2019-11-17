const express = require('express')

const { cartController } = require('../controller')

const router = express.Router()

router.get('/getcart', cartController.getCart)
router.get('/getcartId/:id', cartController.getCartId)
router.get('/getcartw/:id', cartController.getCartWithoutJoin)
router.get('/gettrxitem/:id', cartController.getTransactionItemWithTimeStampId)
router.post('/addcart', cartController.addTocart)
router.put('/editcart/:id', cartController.editCart)
router.get('/datacustomer/:id', cartController.getDataCustomer)
router.post('/datacustomer', cartController.addDataCustomer)
router.get('/totalprice/:id', cartController.totalPrice)
router.post('/checkout/:id', cartController.cartCheckOut)
router.delete('/deletecart/:id', cartController.deleteCart)
router.get('/history/:id', cartController.getHistoryJoinDataCustomerId)
router.get('/history', cartController.getHistoryQuery)
router.get('/historydetails/:id', cartController.getHistoryDetailsId)
router.put('/uploadimage/:id', cartController.addImageUpload) 
router.put('/updatestatus/:id', cartController.updateStatusPayment)

module.exports = router