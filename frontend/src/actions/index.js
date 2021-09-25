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

export const getResult = (result)=>{
    return {
        type:"getResult" , 
        payload:result
    }
}

export const reset = () => {
    return {
      type: "reset",
    };
}; 


export const setAppState = (state) => {
    return {
      type: "setAppState",
      payload: state,
    };
  };
  