import * as types from '../constants/ActionTypes';
import {CLIENT_ID} from '../constants/Config';

export function fetchBusinesses() {
  return dispatch => {
    dispatch(requestBusinesses());
    return fetch(`http://api.soundcloud.com/tracks?linked_partitioning=1&client_id=${CLIENT_ID}&tags=house&limit=50&offset=0`)
      .then(response => response.json())
      .then(json => dispatch(receiveBusinesses(json)))
      .catch(ex => {
        console.log('ex', ex);
      })
  };
}

function receiveBusinesses(json) {
  return {
    type: types.RECEIVE_BUSINESSES,
    businesses: json.collection //TODO: change 'collection' to the correct key of the received JSON
  };
}

function requestBusinesses() {
  return {
    type: types.REQUEST_BUSINESSES
  };
}