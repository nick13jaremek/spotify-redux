import React from 'react';
import {expect} from 'chai';
import ReactDOM from 'react-dom';
import {Map, List} from 'immutable';

import ReactTestUtils from 'react-addons-test-utils';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import * as actions from '../../src/constants/ActionTypes';

const middlewares = [thunkMiddleware];
const mockStore = configureStore(middlewares);

import {AlbumView, AlbumViewContainer, mapStateToProps} from '../../src/components/AlbumView';
import AlbumMainDetails from '../../src/components/AlbumMainDetails';
import AlbumSongs from '../../src/components/AlbumSongs';

const ALBUM_FIXTURE = require('../fixtures/albums').items[0];
const ALBUM_ID = ALBUM_FIXTURE.id;

//TODO: mock the HTTP request to the API endpoints with nock

function setup() {

  const store = mockStore({
    albums: Map({
      isFetching: false,
      items: [],
      details: {}
    })
  }, [{type: actions.REQUEST_ALBUM_DETAILS}, {type: actions.RECEIVE_ALBUM_DETAILS}]);

  let props = {
    params: {
      id: ALBUM_ID
    },
    albums: {
      details: ALBUM_FIXTURE
    },
    dispatch: store.dispatch
  };


  let renderer = ReactTestUtils.createRenderer();
  renderer.render(
    <AlbumView {...props} />
  );

  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

function smartSetup() {

  const store = mockStore({
    albums: Map({
      isFetching: false,
      items: [],
      details: ALBUM_FIXTURE
    })
  }, [{type: actions.REQUEST_ALBUM_DETAILS}, {type: actions.RECEIVE_ALBUM_DETAILS}]);


  /* Mock the props of the 'ArtistView' component. The 'dispatch' property refes to
   * the mocked store's dispatch function for simplicity.
   */
  let props = {
    params: {
      id: ALBUM_ID
    },
    store: store,
    dispatch: store.dispatch
  };


  let renderer = ReactTestUtils.createRenderer();
  renderer.render(
    <AlbumViewContainer {...props} />
  );

  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };

}

describe('AlbumView component', () => {

  it('renders the component', () => {
    const {output} = setup();

    expect(output.type).to.equal('div');
    expect(output.props.className).to.equal('container-fluid');
    expect(output.props.children).to.be.an('object');

    const row = output.props.children;
    expect(row.type).to.equal('div');
    expect(row.props.className).to.equal('row');
    expect(row.props.children).to.be.an('array');
    expect(row.props.children).to.have.length(2);

    const [details, songs] = row.props.children;

    expect(details.type).to.equal(AlbumMainDetails);
    expect(details.props.details).to.equal(ALBUM_FIXTURE);

    expect(songs.type).to.equal(AlbumSongs);
    expect(songs.props.details).to.equal(ALBUM_FIXTURE);
  });

  it('has some props', () => {
    const {props} = setup();

    expect(props).to.have.property('params');
    expect(props.params).to.have.property('id');
    expect(props.params.id).to.equal(ALBUM_ID);

    expect(props).to.have.property('albums');
    expect(props.albums).to.have.property('details');
    expect(props.albums.details).to.equal(ALBUM_FIXTURE);

    expect(props).to.have.property('dispatch');
    expect(props.dispatch).to.be.a('function');
  });
});

describe('AlbumViewContainer component', () => {
  it('renders the component with additional props', () => {

    const {output} = smartSetup();
    expect(output.type).to.equal(AlbumView);

    const props = output.props;

    expect(props.params.id).to.be.defined;
    expect(props.params.id).to.equal(ALBUM_ID);

    expect(props.dispatch).to.be.defined;
    expect(props.dispatch).to.be.a('function');

    expect(props.albums).to.have.property('isFetching');
    expect(props.albums).to.have.property('details');
    expect(props.albums.details).to.equal(ALBUM_FIXTURE);

    expect(props.store).to.be.defined;
  });
});