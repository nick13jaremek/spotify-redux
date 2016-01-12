import * as types from '../constants/ActionTypes';
import SpotifyApi from '../constants/Spotifier';

export function getArtists(name) {
  return dispatch => {
    dispatch(requestArtists(name));
    return SpotifyApi.searchArtists(name)
      .then(json => dispatch(receiveArtists(json)))
      .catch(ex => {
        console.log('ex', ex);
      })
  };
}

export function setArtistName(name) {
  return {
    type: types.SET_ARTIST_NAME,
    value: name
  }
}
function receiveArtists(json) {
  return {
    type: types.RECEIVE_ARTISTS,
    artists: json.artists
  };
}

function requestArtists() {
  return {
    type: types.REQUEST_ARTISTS
  };
}