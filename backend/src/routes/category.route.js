const express = require('express')
const {isAdmin} =require('../middleware/auth.js')
const {createCategory, getCategory, deleteCategory} =require('../controller/category.controller.js')
const Router = express.Router()

Router.post('/add',isAdmin,createCategory)
Router.delete('/delete',isAdmin,deleteCategory)
Router.get('/',getCategory)


module.exports=Router