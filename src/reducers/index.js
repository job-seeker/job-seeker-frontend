'use strict';

import { combineReducers } from 'redux';
import auth from './user-auth-reducer';
import company from './company-reducer';
import contact from './contact-reducer';
import event from './event-reducer';
import job from './job-reducer';
import profile from './profile-reducer';

export default combineReducers({ auth, profile, company, contact, event, job });