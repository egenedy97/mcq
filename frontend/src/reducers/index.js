const initialState = {
    user:'' , 
    result:'' , 
    answeredQuestions:[] ,
    appstate :'start '
}


const reducers = (state = initialState, action) => {
    switch (action.type) {
      case "result":
          return {...state , result: action.payload} ; 
      case "setAppState":
        return { ...state, appState: action.payload };
      case "setUserName":
        return { ...state, userName: action.payload };
      case "setAnsweredQuestions":
        return {
          ...state,
          answeredQuestions: [...state.answeredQuestions, action.payload],
        };
      case "reset":
        return initialState;
      default:
        return state;
    }
  };
  
  export default reducers;

