const express = require('express') ; 
const router = new express.Router() ;
const {createQues ,getAllQuestions , getOneQuestion} = require('../controller/question') ; 

router.post('/createQuestion' ,createQues) ; 
router.get('/getAllQuestions' ,getAllQuestions) ; 
router.get('/getOneQuestion/:id' , getOneQuestion)

module.exports = router ; 
