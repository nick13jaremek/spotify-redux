import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';
import reducer from '../../src/reducers/businessReducer';

const businessList = require('../fixtures/business');

describe('Business reducer',  () => {
  it('handles RECEIVE_BUSINESSES', () => {
    const initialState = Map();
    const action = {
      type: 'RECEIVE_BUSINESSES',
      businesses: businessList.businesses
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      isFetching: false,
      items: businessList.businesses
    }));
  });

  it('handles REQUEST_BUSINESSES', () => {

    const initialState = Map();
    const action = {
      type: 'REQUEST_BUSINESSES'
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
      items: []
    }));
  });
});