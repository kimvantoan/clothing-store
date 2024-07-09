const mongodbURL='mongodb+srv://kimvantoan2k3:NwyQAjutLxMcQ6P9@cluster0.mudtjin.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const mongoose = require('mongoose')

const connectDb=()=>{
    return mongoose.connect(mongodbURL)
}

module.exports={connectDb}