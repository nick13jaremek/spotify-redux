import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';
import reducer from '../../src/reducers/ArtistsReducer';

const artistsList = require('../fixtures/artists').artists;

describe('Artists reducer',  () => {
  it('handles RECEIVE_ARTISTS', () => {
    const initialState = Map();
    const action = {
      type: 'RECEIVE_ARTISTS',
      artists: artistsList,
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      isFetching: false,
      items: artistsList.items
    }));
  });

  it('handles REQUEST_ARTISTS', () => {

    const initialState = Map();
    const action = {
      type: 'REQUEST_ARTISTS'
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      isFetching: true
    }));
  });

  it('returns the same state when an unregistered action is provided', () => {
    const initialState = Map();

    const action = {
      type: 'INVENT'
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(initialState);
  });

  it('returns an initial state when no state is provided', () => {
    const action = {
      type: 'INVENT'
    };

    const nextState = reducer(undefined, action);

    expect(nextState).to.equal(fromJS({
      isFetching: false,
      items: [],
      details: {}
    }));
  });
});