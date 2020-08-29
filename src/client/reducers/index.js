import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import commonReducer from './common_reducer';

const rootReducer = combineReducers({
  userReducer,
  commonReducer,
});

export default rootReducer;
