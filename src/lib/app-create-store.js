'use strict';

import reducer from '../reducers/index';
import thunk from './thunk';
import reporter from './reporter';
import { createStore, applyMiddleware } from 'redux';

const appCreateStore = () => (
  createStore(reducer, applyMiddleware(thunk, reporter))
);

export default appCreateStore;