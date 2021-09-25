const express = require('express')
const db = require('./config/database')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()


mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })

  
const publicDirectoryPath = path.join(__dirname, './view')

app.use(express.static(publicDirectoryPath))

app.use(cors())

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log('app is on Port ' + port)
})

