'use strict';

import { combineReducers } from 'redux';
import token from './user-auth-reducer';
import auth from './auth';
import profile from './profile-reducer';

export default combineReducers({ auth, token, profile });
