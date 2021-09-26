import axios from 'axios' 

const url = "http://localhost:4000" 

const baseURL = "/getAllQuestions"
const postURL= "/createQuestion"


const timeline = async()=>{
    const response = await axios.get(`${url+baseURL}`)
    return response.data ; 
};

const createQuestion = async(result)=>{
    const response = await axios.post(`${url+postURL}` , result) ; 
    console.log(`${url+baseURL}`) ; 
    return response.data ; 
};


const questionService = {timeline , createQuestion} 
 

export default questionService ; 
