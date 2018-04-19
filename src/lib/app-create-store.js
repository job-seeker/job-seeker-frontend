'use strict';

import reducer from '../reducers/index.js';
import thunk from './thunk';
import reporter from './reporter';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const PROD = process.env.NODE_ENV === 'production';

const useMiddleware = PROD ? applyMiddleware(thunk) : composeWithDevTools(applyMiddleware(thunk, reporter));

const appCreateStore = () => (
  createStore(reducer, useMiddleware)
);

export default appCreateStore;