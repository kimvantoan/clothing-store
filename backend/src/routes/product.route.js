const express = require('express')
const { createProduct, getAllProduct, getProductById, deleteProductById, updateProduct } = require('../controller/product.controller')
const Router = express.Router()

Router.post('/createProduct',createProduct)
Router.get('/',getAllProduct)
Router.get('/:id',getProductById)
Router.delete('/delete',deleteProductById)
Router.patch('/update',updateProduct)

module.exports=Router