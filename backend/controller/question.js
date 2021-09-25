const Question = require('../models/question') ; 

const createQues = async(req,res)=>{
    try{
        const addQuestion = await new Question(req.body) ; 
        const result = await addQuestion.save() ; 
        res.status(200).send(result) ; 
    }
    catch(e)
    {
        res.status(400).send(e)
    }
}


module.exports = {createQues}