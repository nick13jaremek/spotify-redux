import * as types from '../constants/ActionTypes';
import SpotifyApi from '../constants/Spotifier';

export function getAlbumDetails(albumId) {
  return dispatch => {
    dispatch(requestAlbumDetails(albumId));
    return SpotifyApi.getAlbum(albumId, {limit: 40})
      .then(json => dispatch(receiveAlbumDetails(json)))
      .catch(ex => {
        console.log('ex', ex);
      })
  };
}

function receiveAlbumDetails(json) {
  return {
    type: types.RECEIVE_ALBUM_DETAILS,
    details: json
  };
}

function requestAlbumDetails() {
  return {
    type: types.REQUEST_ALBUM_DETAILS
  };
}