import React from 'react'
import { Route, Switch , Redirect } from 'react-router-dom'
import Register from '../components/Register' ; 
import Quiz from '../components/Quiz';
import FinalResult from '../components/FinalResult' ; 
import AddQuestion from '../components/AddQuestion';
function App() {
  return (
   <Switch>
     <Route path='/register' component={Register} />
     <Route path='/quiz' component ={Quiz} />
     <Route path ='/result' component ={FinalResult} />
     <Route path = '/addQuestion' component={AddQuestion} />
     <Route exact path="/">
        <Redirect to="/register" />
      </Route>
   </Switch>
  );
}

export default App;
