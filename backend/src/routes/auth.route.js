const express = require('express')
const Router = express.Router()
const {register,login, loginAdmin, logout} = require('../controller/auth.controller.js')

Router.post('/register',register)
Router.post('/login',login)
Router.post('/loginAdmin',loginAdmin)
Router.get('/logout',logout)

module.exports=Router