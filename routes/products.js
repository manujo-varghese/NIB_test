const express = require('express');
const router = express.Router();
const data = require('../data/data.json');

router.get('/',(req, res) => {
    res.send(data.products)
})
router.get('/:productId',(req, res) => {
    if(!req.product) res.status(404).send('Product not found')
    res.send(req.product)
})
router.param("productId",(req, res, next, productId) => {
    req.product = data.products[productId]
    next()
})

module.exports = router;

