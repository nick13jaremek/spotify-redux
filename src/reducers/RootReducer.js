import {combineReducers} from 'redux';
import artistReducer from './ArtistsReducer';
import artistDetailsReducer from './ArtistDetailsReducer';

const rootReducer = combineReducers({
  artists: artistReducer,
  artist: artistDetailsReducer
});

export default rootReducer;