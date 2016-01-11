import {combineReducers} from 'redux';
import artistReducer from './ArtistsReducer';
import artistDetailsReducer from './ArtistDetailsReducer';
import artistAlbumsReducer from './ArtistAlbumsReducer';

const rootReducer = combineReducers({
  artists: artistReducer,
  artist: artistDetailsReducer,
  albums: artistAlbumsReducer
});

export default rootReducer;