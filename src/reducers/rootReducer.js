import {combineReducers} from 'redux';
import businessReducer from './businessReducer';

const rootReducer = combineReducers({
  business: businessReducer
});

export default rootReducer;