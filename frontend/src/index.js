import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from './reducers/index'
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
 
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);
