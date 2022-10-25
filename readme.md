# Welcome to this test for Order Fulfillment

# How to run test this code

    1. clone the repo into your favorite IDE! Mine is VS code url : https://github.com/manujo-varghese/NIB_test.git
    2. run npm install in terminal
    3. run 'npm run devStart'
    4. run 'npm run test' for test cases to run
    5. this will pop server on port 3000
# Available API endpoints:

1. orders // fetch all orders
    a. orderId // get individual order
    b. processOrders // perform ProcessOrder
2. products // fetch all products
    a. productId // get individual product


#ProcessOrder

As mentioned in the Question it will accept a list orderIds and return orderIds
which are unable to fullfil the order

Things to note I have created 3 helper class out of that
both newPurchaseOrder and ReadyForDispatch just accepts productID and orderId and

Things for ProcessOrder given as comments in checkStockLevels