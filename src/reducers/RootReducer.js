import {combineReducers} from 'redux';
import artistReducer from './ArtistsReducer';
import artistDetailsReducer from './ArtistDetailsReducer';
import artistAlbumsReducer from './ArtistAlbumsReducer';
import inputsReducer from './InputsReducer';
import albumDetailsReducer from './AlbumDetailsReducer';

const rootReducer = combineReducers({
  artists: artistReducer,
  artist: artistDetailsReducer,
  albums: artistAlbumsReducer,
  inputs: inputsReducer,
  album: albumDetailsReducer
});

export default rootReducer;