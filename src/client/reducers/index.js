import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import commonReducer from './common_reducer';
import portfolioReducer from './portfolio_reducer';

const rootReducer = combineReducers({
  userReducer,
  commonReducer,
  portfolioReducer,
});

export default rootReducer;
