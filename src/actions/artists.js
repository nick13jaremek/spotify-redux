import * as types from '../constants/ActionTypes';
import SpotifyApi from '../constants/Spotifier';

export function getArtists() {
  return dispatch => {
    dispatch(requestArtists());
    return SpotifyApi.searchArtists('Leonard Cohen')
      .then(json => dispatch(receiveArtists(json)))
      .catch(ex => {
        console.log('ex', ex);
      })
  };
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