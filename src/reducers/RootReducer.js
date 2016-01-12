import {combineReducers} from 'redux';
import artistReducer from './ArtistsReducer';
import artistDetailsReducer from './ArtistDetailsReducer';
import artistAlbumsReducer from './ArtistAlbumsReducer';
import inputsReducer from './InputsReducer';

const rootReducer = combineReducers({
  artists: artistReducer,
  artist: artistDetailsReducer,
  albums: artistAlbumsReducer,
  inputs: inputsReducer
});

export default rootReducer;