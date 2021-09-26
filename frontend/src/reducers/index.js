const initialState = {
    user:'' , 
    result:'5' , 
    answeredQuestions:[] ,
}


const reducers = (state = initialState, action) => {
    switch (action.type) {
      case "result":
          return {...state , result: action.payload} ; 
      case "setUserName":
        return { ...state, user: action.payload };
      
      case "addQuestion" :
        return {
          ...state , answeredQuestions:[...state.answeredQuestions , action.payload]
        }
      case "getQuestions" :{
        return {
          ...state , answeredQuestions:[...state.answeredQuestions , action.payload]
        }
      }
      case "reset":
        return initialState;
      default:
        return state;
    }
  };
  
  export default reducers;

