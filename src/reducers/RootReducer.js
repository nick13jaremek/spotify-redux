import {combineReducers} from 'redux';
import artistReducer from './ArtistsReducer';

const rootReducer = combineReducers({
  artists: artistReducer
});

export default rootReducer;