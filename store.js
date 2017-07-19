import {createStore, combineReducers} from 'redux';

import conversationsReducer from './ducks/conversationsReducer';
import profileReducer from './ducks/profilesReducer';
import matchesReducer from './ducks/matchesReducer';

export default createStore (combineReducers({conversationsReducer, profileReducer, matchesReducer}))