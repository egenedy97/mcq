export const setUserName = (userName) => {
    return {
      type: "setUserName",
      payload: userName,
    };
  };


export const getQuestions =(answers)=>{
    return{
        type:"getQuestions" , 
        payload: answers
    }
}

export const setResult = (result)=>{
  return{
    type:"result" , 
    payload:result
  }
}

export const reset = () => {
    return {
      type: "reset",
    };
}; 

export const addQuestion = (question)=>{
  return{
    type:"addQuestion",
    payload:question
  }
}

