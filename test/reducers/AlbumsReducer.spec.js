import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';
import reducer from '../../src/reducers/AlbumsReducer';

const ALBUMS_FIXTURE = require('../fixtures/albums').items;
const SINGLE_ALBUM_FIXTURE = require('../fixtures/album');

describe('Albums reducer', () => {
  it('handles the RECEIVE_ARTIST_ALBUMS action', () => {
    const initialState = Map();
    const action = {
      type: 'RECEIVE_ARTIST_ALBUMS',
      albums: ALBUMS_FIXTURE,
      total: ALBUMS_FIXTURE.length
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      isFetching: false,
      items: ALBUMS_FIXTURE,
      total: ALBUMS_FIXTURE.length
    }));
  });

  it('handles the REQUEST_ARTIST_ALBUMS action', () => {
    const initialState = Map();

    const action = {
      type: 'REQUEST_ARTIST_ALBUMS'
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      isFetching: true
    }));
  });

  it('handles the RECEIVE_ALBUM_DETAILS action', () => {
    const initialState = Map();

    const action = {
      type: 'RECEIVE_ALBUM_DETAILS',
      details: ALBUMS_FIXTURE
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      isFetching: false,
      details: ALBUMS_FIXTURE
    }));
  });

  it('handles the REQUEST_ALBUM_DETAILS action', () => {
    const initialState = Map();

    const action = {
      type: 'REQUEST_ALBUM_DETAILS'
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
      details: {},
      total: 0
    }));
  });
});
