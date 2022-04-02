const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/admin')
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const adminRouter = require('./route/admin.router')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/admin',adminRouter)

app.listen(3000,() => {
    console.log('server running...')
})