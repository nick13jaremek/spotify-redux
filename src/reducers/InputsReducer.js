import {List, Map, fromJS} from 'immutable';
import * as types from '../constants/ActionTypes';

/*
 * This is the shape the initial state for the inputs reducer will have.
 * Elements:
 *   input: string indicating the value of the input field
 */
const initialState = Map({
  input: ''
});

/*
 * This function sets the state to a new one containing the value of the input field related to the triggered dispatch
 *
 * Params:
 *   state: the state from which the action starts.
 *   value: the value to be set on the state for some input element.
 *
 *   Returns: the new state with the new input value set.
* */

function setInputValue(state, value) {
  let newState = Map({
    input: value
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
    case types.SET_INPUT_VALUE:
      return setInputValue(state, action.value);

    default:
      return state;
  }
}