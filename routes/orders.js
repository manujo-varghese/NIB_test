const express = require('express');
const router = express.Router();
const data = require('../data/data.json');
const checkStockLevels = require('../helperMethods/checkStockLevels')
router.get('/',(req, res) => {
    res.send(data.orders)
})
router.get('/:orderId',(req, res) => {
    if(!req.order) return res.status(404).send('Order could not be found');
    res.status(200).send(req.order)
})

router.post('/processOrders',async (req, res) => {
    var orderIds = req.body.orderIds;
    if (!orderIds || orderIds.length === 0) return res.status(400).send('No order ids were provided')
    let orderIdsNotFilled = []
    var orderNotFullFilled;
    await orderIds.forEach(async orderId => {
       orderNotFullFilled = await checkStockLevels(orderId)
       if(orderNotFullFilled) orderIdsNotFilled.push(orderNotFullFilled) 
    })
    if(orderIdsNotFilled.length === 0 ) res.send('All orders completed')
    res.send({"orderIdsNotFilled":orderIdsNotFilled})
})

router.param("orderId",(req, res, next, orderId) => {
    req.order = data.orders.find(element => {
        return element.orderId === parseInt(orderId)})
    next()
})

module.exports = router;

