import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";


import App from './components/containers/app.js';
import reducers from './reducers/index.js';

const createStoreWithMiddleware = applyMiddleware(promise(), thunk, createLogger());

ReactDOM.render(
  <Provider store={createStore(reducers, createStoreWithMiddleware)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
