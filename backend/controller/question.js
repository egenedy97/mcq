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

getAllQuestions = async(req,res)=>{
    try{
        const questions = await Question.find({}) ; 
        if(questions.length <= 0)
        {
            throw new Error('There is no Questions')
        }
        const result = [] ;
        for(let i = 0 ;i<4 ; i++)
        {
            result.push(questions[[Math.floor(Math.random()*questions.length)]])

        }
        result.forEach(element => {
            element.answers = maketheArray(element.answers) ; 
        });
        
        
        res.status(200).send(result) ; 
    }catch(e)
    {
        res.status(400).send(e)
    }
}

const getOneQuestion = async(req,res)=>{
    try{
        const question =await Question.findById({_id:req.params.id}) ; 
        if(!question)
        {
            throw new Error('There is no Question With this ID') ;
        }
        res.status.send(question) ; 
    }catch(e)
    {
        res.status(400).send(e)
    }
} 

const maketheArray =(array)=>{
    let length = array.length ; 
    let result = [] ; 
    for(let i = 0 ;i<length ; i++)
    {
        result.push(array[[Math.floor(Math.random()*array.length)]]);
    }
    return result ; 
}

module.exports = {createQues ,getAllQuestions , getOneQuestion}
