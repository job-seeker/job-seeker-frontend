'use strict';

import { combineReducers } from 'redux';
import token from './user-auth-reducer';
// import company from './company-reducer';
import contact from './contact-reducer';
import event from './event-reducer';
import job from './job-reducer';
import auth from './auth';
import profile from './profile-reducer';

export default combineReducers({ auth, token, profile });
