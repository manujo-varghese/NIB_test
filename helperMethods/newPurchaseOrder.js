const data = require('../data/data.json');
// just a demo method to take care dispatching
function newPurchaseOrder(orderId,productId){
    console.log(`Creating new purchase for order ${orderId} for product ${productId}`);
}


module.exports = newPurchaseOrder;