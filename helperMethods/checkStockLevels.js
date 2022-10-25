const data = require('../data/data.json');
const readyForDispatch = require('./readyForDispatch')
const newPurchaseOrder = require('./newPurchaseOrder')
/**
 * @param {*} orderId 
 */
// receives an orderId and check for stock levels and do other required functionalities such as updating
// dispatch order or generate new purchase order
async function checkStockLevels(orderId){
    let order = data.orders.find(element => {
        return element.orderId === parseInt(orderId)})
   if(!order) return null;
   let productsRequired = {}
   /**
    *  the below function is precaution if the order contains products with same orderId multiple times
   like productId:1 quantity:10 , productId:2 quantity: 20, productId:1 quantity: 20
   by end of this process it will convert to  productId:1 quantity:30 , productId:2 quantity: 20
    */
  
   order.items.forEach(function(item) {
    if (productsRequired.hasOwnProperty(item.productId)) {
      productsRequired[item.productId] = productsRequired[item.productId] + item.quantity;
    } else {
      productsRequired[item.productId] = item.quantity;
    }
  });
  
  var totalProductsQty = [];
  
  for (var prop in productsRequired) {
    totalProductsQty.push({ productId: prop, quantity: productsRequired[prop] });
  }
  let orderStatus = true;
  totalProductsQty.forEach(product => {
    let availableProduct = data.products.find(element => {
        return element.productId === parseInt(product.productId)})
    if (parseInt(availableProduct.quantityOnHand) < parseInt(product.quantity)){
        orderStatus = false;
    }
    // this is not a perfect solution as we are not updating the db but will check for possible ordering and reorder accordingly
    if ((parseInt(availableProduct.quantityOnHand) - parseInt(product.quantity)) < parseInt(availableProduct.reorderThreshold) ){
        newPurchaseOrder(orderId,product.productId)
    }
  })
  console.log(orderStatus)
  console.log(orderId)
  if(!orderStatus) return orderId
  readyForDispatch(orderId)

}
module.exports = checkStockLevels;