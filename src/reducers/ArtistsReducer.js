import {List, Map, fromJS} from 'immutable';
import * as types from '../constants/ActionTypes';

/*
* This is the shape the state for the artists reducer will have.
* Elements:
*   isFetching: boolean indicator on whether a request is being performed to fetch artists from Spotify's API
*   items: a list of artist objects obtained from Spotify's API via requests
*/
const initialState = Map({
  isFetching: false,
  items: List(),
  details: Map()
});

/*
* Given a list of artist objects which should come from an already-finished request to Spotify's API, this function
* returns a new state with the 'items' field set to the List of Artists provided as an argument.
*
* Params:
*   state: the current state to use in order to generate the next one
*   artistList: an array of objects, each object containing data associated to a artist of the Spotify database
*
* Returns: the new state with the 'items' field set to the list of artist provided as an argument
*/
function receiveArtists(state, artistsList) {
  var newState = fromJS({
    items: artistsList.items, // Return items property of Spotify response, which contains the array of artists
    isFetching: false
  });
  return state.merge(newState);
}

/*
* Sets the state's 'isFetching' field to true, in order to indicate that a request to fetch the Spotify's database artists
* is currently being performed
*
* Params:
*   state: the current state to use in order to generate the next one
*
* Returns: the new state with the 'isFetching' item set to true
*/
function requestArtists(state) {
  let newState = Map({
    isFetching: true
  });
  return state.merge(newState);
}

/*
 * Given an artists' details which should come from an already-finished request to Spotify's API, this function
 * returns a new state with the 'details' field set to the object with the artist details provided as an argument.
 *
 * Params:
 *   state: the current state to use in order to generate the next one
 *   artistDetails: an object containing the requested artist details
 *
 * Returns: the new state with the 'details' field set to the artist details provided as an argument
 */
function receiveArtistDetails(state, artist) {
  var newState = fromJS({
    details: artist, // TODO: extract details from the correct property of the artistDetails object
    isFetching: false
  });
  return state.merge(newState);
}

/*
 * Sets the state's 'isFetching' field to true, in order to indicate that a request to fetch the a Spotify artist's details
 * is currently in progress
 *
 * Params:
 *   state: the current state to use in order to generate the next one
 *
 * Returns: the new state with the 'isFetching' item set to true
 */
function requestArtistDetails(state) {
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
export default function artists(state=initialState, action) {
  switch(action.type) {
    case types.RECEIVE_ARTISTS:
      return receiveArtists(state, action.artists);

    case types.REQUEST_ARTISTS:
      return requestArtists(state);

    case types.RECEIVE_ARTIST_DETAILS:
      return receiveArtistDetails(state, action.artist);

    case types.REQUEST_ARTIST_DETAILS:
      return requestArtistDetails(state);

    default:
      return state;
  }
}