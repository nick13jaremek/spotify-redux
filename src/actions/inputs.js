import * as types from '../constants/ActionTypes';
import SpotifyApi from '../constants/Spotifier';

export function setSearchBarValue(name) {
  return {
    type: types.SET_INPUT_VALUE,
    value: name
  }
}