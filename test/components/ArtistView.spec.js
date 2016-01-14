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

import {ArtistView, ArtistViewContainer, mapStateToProps} from '../../src/components/ArtistView';
import ArtistMainDetails from '../../src/components/ArtistMainDetails';
import ArtistAlbums from '../../src/components/ArtistAlbums';

const ARTIST_ID = 'abcde012345';
const ARTIST_FIXTURE = require('../fixtures/artists').artists.items[0];
const ALBUMS_FIXTURE = require('../fixtures/albums').items;

//TODO: mock the HTTP request to the API endpoints with nock

function setup() {

  /* This mock store starts with an initial state as given in the first argument
  * and checks that it receives two actions: REQUEST_ARTIST_DETAILS and REQUEST_ARTIST_ALBUMS.
  * Since the dispatch function is associated to the ArtistView props, the ArtistView component
   * will call dispatch as soon as it gets mounted. In this case, it calls dispatch twice, once for
   * each action.
   */
  const store = mockStore({
    artists: Map({
      isFetching: false,
      details: {},
      items: []
    }),
    albums: Map({
      isFetching: false,
      items: [],
      details: {}
    })
  }, [{type: actions.REQUEST_ARTIST_DETAILS}, {type: actions.REQUEST_ARTIST_ALBUMS}]);


  /* Mock the props of the 'ArtistView' component. The 'dispatch' property refes to
  * the mocked store's dispatch function for simplicity.
  */
  let props = {
    params: {
      id: ARTIST_ID
    },
    artists: { // Reproduce the artistDetails reducer's state structure with fixture
      isFetching: false,
      details: ARTIST_FIXTURE,
      items: []
    },
    albums: { // Reproduce the artistAlbums reducer's state structure with fixture
      isFetching: false,
      items: ALBUMS_FIXTURE,
      details: {}
    },
    dispatch: store.dispatch
  };


  let renderer = ReactTestUtils.createRenderer();
  renderer.render(
      <ArtistView {...props} />
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
    artists: Map({
      isFetching: false,
      details: ARTIST_FIXTURE,
      items: []
    }),
    albums: Map({
      isFetching: false,
      items: ALBUMS_FIXTURE,
      details: {}
    })
  }, [{type: actions.REQUEST_ARTIST_DETAILS}, {type: actions.REQUEST_ARTIST_ALBUMS}]);


  /* Mock the props of the 'ArtistView' component. The 'dispatch' property refes to
   * the mocked store's dispatch function for simplicity.
   */
  let props = {
    params: {
      id: ARTIST_ID
    },
    store: store,
    dispatch: store.dispatch
  };

  let renderer = ReactTestUtils.createRenderer();
  renderer.render(
    <ArtistViewContainer {...props} />
  );

  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };

}

describe('ArtistView component', () => {

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

    const [artistDetails, artistAlbums] = row.props.children;

    expect(artistDetails.type).to.equal(ArtistMainDetails);
    expect(artistDetails.props.details).to.equal(ARTIST_FIXTURE);

    expect(artistAlbums.type).to.equal(ArtistAlbums);
    expect(artistAlbums.props.albums).to.equal(ALBUMS_FIXTURE);
    expect(artistAlbums.props.artist).to.equal(ARTIST_FIXTURE);
  });

  it('has default props', () => {

    const {props} = setup();

    expect(props.params.id).to.be.defined;
    expect(props.params.id).to.equal(ARTIST_ID);

    expect(props.artists.details).to.be.defined;
    expect(props.artists.details).to.equal(ARTIST_FIXTURE);

    expect(props.albums.items).to.be.defined;
    expect(props.albums.items).to.equal(ALBUMS_FIXTURE);

  });
});

describe('ArtistViewContainer component', () => {

  it('renders the component with additional mapped props', () => {

    const {output} = smartSetup();
    expect(output.type).to.equal(ArtistView);

    const props = output.props;

    expect(props.params.id).to.be.defined;
    expect(props.params.id).to.equal(ARTIST_ID);

    expect(props.dispatch).to.be.defined;
    expect(props.dispatch).to.be.a('function');

    expect(props.artists).to.have.property('isFetching');
    expect(props.artists).to.have.property('details');
    expect(props.artists.details).to.equal(ARTIST_FIXTURE);

    expect(props.albums).to.have.property('isFetching');
    expect(props.albums).to.have.property('items');
    expect(props.albums.items).to.equal(ALBUMS_FIXTURE);

    expect(props.store).to.be.defined;
  });
});