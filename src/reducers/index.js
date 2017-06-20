import { combineReducers } from 'redux';
import authenticationReducer from './authenication';

const rootReducer = combineReducers({
  authenicated: authenticationReducer
});

export default rootReducer;
