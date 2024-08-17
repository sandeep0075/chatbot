import { combineReducers } from 'redux';
import chatReducer from './chatReducers';

const rootReducer = combineReducers({
  chatReducer: chatReducer,
});

export default rootReducer;
