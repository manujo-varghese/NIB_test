const express = require('express');
const app = express();

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended:true }))
app.use(express.json());
app.get('/',(req, res) =>{
    res.render('index')
})


const orderRouter = require('./routes/orders')
const productRouter = require('./routes/products')

app.use('/orders', orderRouter)
app.use('/products', productRouter)

app.listen(3000)

