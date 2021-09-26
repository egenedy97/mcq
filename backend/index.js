const express = require('express')
const db = require('./config/database')
const http = require('http')  ; 
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const question = require('./routes/question');


mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true 

  })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })

  app.use(express.json());

  const publicDirectoryPath = path.join(__dirname,'./view')

  app.use(express.static(publicDirectoryPath))

app.use(cors()) ; 
app.use('/' , question) ;


const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log('app is on Port ' + port)
})

