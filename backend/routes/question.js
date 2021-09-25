const express = require('express') ; 
const router = new express.Router() ;
const {createQues} = require('../controller/question') ; 

router.post('/createQuestion' ,createQues)

module.exports = router ; 
