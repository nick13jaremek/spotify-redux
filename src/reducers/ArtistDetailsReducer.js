import {List, Map, fromJS} from 'immutable';
import * as types from '../constants/ActionTypes';

/*
 * This is the shape the state for the artistDetail reducer will have.
 * Elements:
 *   isFetching: boolean indicator on whether a request is being performed to fetch an artists' details from Spotify's API
 *   details: a list of properties containing detailed information about the requested
 *   artist obtained from Spotify's API via requests
 */
const initialState = Map({
  isFetching: false,
  details: List()
});

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
function receiveArtistDetails(state, artistDetails) {
  var newState = fromJS({
    details: artistDetails, // TODO: extract details from the correct property of the artistDetails object
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
    case types.RECEIVE_ARTIST_DETAILS:
      return receiveArtistDetails(state, action.artist);

    case types.REQUEST_ARTIST_DETAILS:
      return requestArtistDetails(state);

    default:
      return state;
  }
}