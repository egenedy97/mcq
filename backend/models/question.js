const mongoose = require('mongoose') ; 

const questionSchema = new mongoose.Schema({
    title:{
        type:String ,
        required:true 
    } , 
    answers:[{
        type:String ,
    }],
    correct:{
        type:String , 
        required:true
    }

})

const Question = mongoose.model('Question' , questionSchema) ; 

module.exports= Question ; 

