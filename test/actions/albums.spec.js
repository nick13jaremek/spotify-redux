import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions/albums';
import * as types from '../../src/constants/ActionTypes';
import nock from 'nock';
const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

const ARTIST_ID = require('../fixtures/artist').id;
const ARTIST_ALBUMS = require('../fixtures/albums');
const ALBUM_DETAILS = require('../fixtures/album');
const ALBUM_ID = ALBUM_DETAILS.id;

describe('Album actions', () => {

  before(() => {
    nock.disableNetConnect(); // Placed locally in describe because otherwise it affects the rest of test suites.
  });

  afterEach(() => {
    nock.cleanAll();
  });

  after(() => {
    nock.enableNetConnect();
  });

  it('requests an artist\'s albums', (done) => {

    var nocked = nock('https://api.spotify.com/v1')
      .get('/artists/' + ARTIST_ID + '/albums?limit=40')
      .reply(200, ARTIST_ALBUMS);

    const expectedActions = [
      {type: types.REQUEST_ARTIST_ALBUMS},
      {type: types.RECEIVE_ARTIST_ALBUMS, albums: ARTIST_ALBUMS.items, total: ARTIST_ALBUMS.total}
    ];

    const store = mockStore({albums: {}}, expectedActions, () => {
      nocked.done();
      return done();
    });

    store.dispatch(actions.getArtistAlbums(ARTIST_ID));
  });

  it('retrieves an album details', (done) => {

    var nocked = nock('https://api.spotify.com/v1')
      .get('/albums/' + ALBUM_ID + '?limit=40')
      .reply(200, ALBUM_DETAILS);

    const expectedActions = [
      {type: types.REQUEST_ALBUM_DETAILS},
      {type: types.RECEIVE_ALBUM_DETAILS, details: ALBUM_DETAILS}
    ];

    const store = mockStore({albums: {}}, expectedActions, () => {
      nocked.done();
      return done();
    });

    store.dispatch(actions.getAlbumDetails(ALBUM_ID));
  });
});