import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,combineReducers,applyMiddleware} from 'redux';

import registrationReducers from './reducers/registrationReducer';
import messageReducer from './reducers/messageReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
const allReducers=combineReducers({
  registrationReducers:registrationReducers,
  messageReducer:messageReducer
})
const store=createStore(allReducers,applyMiddleware(thunk,logger));
ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
