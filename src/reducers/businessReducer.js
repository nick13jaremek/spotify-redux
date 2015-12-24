import {List, Map, fromJS} from 'immutable';
import * as types from '../constants/ActionTypes';

/*
* This is the shape the state for the business reducer will have.
* Elements:
*   isFetching: boolean indicator on whether a request is being performed to fetch businesses from Yelp's API
*   items: a list of business objects obtained from Yelp's API via requests
*/
const initialState = Map({
  isFetching: false,
  items: List()
});

/*
* Given a list of business objects which should come from an already-finished request to Yelp's API, this function
* returns a new state with the 'items' field set to the List of Businesses provided as an argument.
*
* Params:
*   state: the current state to use in order to generate the next one
*   businessList: an array of objects, each object containing data associated to a business of the Yelp database
*
* Returns: the new state with the 'items' field set to the list of businesses provided as an argument
*/
function receiveBusinesses(state, businessList) {
  var newState = fromJS({
    items: businessList,
    isFetching: false
  });

  return state.merge(newState);
}

/*
* Sets the state's 'isFetching' field to true, in order to indicate that a request to fetch the Yelp's database businesses
* is currently being performed
*
* Params:
*   state: the current state to use in order to generate the next one
*
* Returns: the new state with the 'isFetching' item set to true
*/
function requestBusiness(state) {
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
export default function businesses(state=initialState, action) {
  switch(action.type) {
    case types.RECEIVE_BUSINESSES:
      return receiveBusinesses(state, action.businesses);

    case types.REQUEST_BUSINESSES:
      return requestBusiness(state);

    default:
      return state;
  }
}