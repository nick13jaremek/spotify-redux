import {List, Map, fromJS} from 'immutable';
import * as types from '../constants/ActionTypes';

/*
 * This is the shape the state for the artistAlbums reducer will have.
 * Elements:
 *   isFetching: boolean indicator on whether a request is being performed to fetch an artists' details from Spotify's API
 *   items: a list of items containing information about each of the albums belonging to the requested
 *   artist obtained from Spotify's API via requests
 */
const initialState = Map({
  isFetching: false,
  items: List(),
  details: Map(),
  total: 0
});

/*
 * Given an artists' albums which should come from an already-finished request to Spotify's API, this function
 * returns a new state with the 'items' field set to the array containing the artist's albums which is provided as
 * an argument.
 *
 * Params:
 *   state: the current state to use in order to generate the next one
 *   artistAlbums: an object containing the requested artist albums
 *
 * Returns: the new state with the 'items' field set to the artist albums provided as an argument
 */
function receiveArtistAlbums(state, artistAlbums, totalAlbums) {
  var newState = fromJS({
    items: artistAlbums,
    isFetching: false,
    total: totalAlbums
  });
  return state.merge(newState);
}

/*
 * Sets the state's 'isFetching' field to true, in order to indicate that a request to fetch the a Spotify artist's albums
 * is currently in progress
 *
 * Params:
 *   state: the current state to use in order to generate the next one
 *
 * Returns: the new state with the 'isFetching' item set to true
 */
function requestArtistAlbums(state) {
  let newState = Map({
    isFetching: true
  });
  return state.merge(newState);
}

/*
 * Given an artists' albums which should come from an already-finished request to Spotify's API, this function
 * returns a new state with the 'items' field set to the array containing the artist's albums which is provided as
 * an argument.
 *
 * Params:
 *   state: the current state to use in order to generate the next one
 *   artistAlbums: an object containing the requested artist albums
 *
 * Returns: the new state with the 'items' field set to the artist albums provided as an argument
 */
function receiveAlbumDetails(state, albumDetails) {
  var newState = fromJS({
    details: albumDetails, // TODO: extract details from the correct property of the artistDetails object
    isFetching: false
  });
  return state.merge(newState);
}

/*
 * Sets the state's 'isFetching' field to true, in order to indicate that a request to fetch the a Spotify artist's albums
 * is currently in progress
 *
 * Params:
 *   state: the current state to use in order to generate the next one
 *
 * Returns: the new state with the 'isFetching' item set to true
 */
function requestAlbumDetails(state) {
  let newState = Map({
    isFetching: true
  });
  return state.merge(newState);
}

/*
 * This is the main function which is responsible of reducing a state to a new one for a registered action, otherwise
 * it returns the same state it received.
 *
 * Params:
 *   state: the state from which the reducer shall start.
 *   action: an object containing at least a 'type' field with the action to perform on the passed state.
 *
 * Returns: the new state for the provided action or the same state if the passed action did not have a matching 'type'
 */
export default function artistAlbums(state=initialState, action) {
  switch(action.type) {
    case types.RECEIVE_ARTIST_ALBUMS:
      return receiveArtistAlbums(state, action.albums, action.total);

    case types.REQUEST_ARTIST_ALBUMS:
      return requestArtistAlbums(state);

    case types.RECEIVE_ALBUM_DETAILS:
      return receiveAlbumDetails(state, action.details);

    case types.REQUEST_ALBUM_DETAILS:
      return requestAlbumDetails(state);

    default:
      return state;
  }
}