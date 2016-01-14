import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions/artists';
import * as types from '../../src/constants/ActionTypes';
import nock from 'nock';
const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

const ARTIST_NAME = 'Muse';
const ARTISTS = require('../fixtures/artists');
const ARTIST = require('../fixtures/artist');
const ARTIST_ID = ARTIST.id;

describe('Artists actions', () => {

  before(() => {
    nock.disableNetConnect(); // Placed locally in describe because otherwise it affects the rest of test suites.
  });

  afterEach(() => {
    nock.cleanAll();
  });

  after(() => {
    nock.enableNetConnect();
  });

  it('requests an artists lookup by name', (done) => {
    var nocked = nock('https://api.spotify.com/v1')
      .get('/search/?q=' + ARTIST_NAME + '&type=artist')
      .reply(200, ARTISTS);

    const expectedActions = [
      {type: types.REQUEST_ARTISTS},
      {type: types.RECEIVE_ARTISTS, artists: ARTISTS.artists}
    ];

    const store = mockStore({artists: {}}, expectedActions, () => {
      nocked.done();
      return done();
    });

    store.dispatch(actions.getArtists(ARTIST_NAME));
  });

  it('retrieves an artist\'s details', (done) => {

    var nocked = nock('https://api.spotify.com/v1')
      .get('/artists/' + ARTIST_ID)
      .reply(200, ARTIST);

    const expectedActions = [
      {type: types.REQUEST_ARTIST_DETAILS},
      {type: types.RECEIVE_ARTIST_DETAILS, artist: ARTIST}
    ];

    const store = mockStore({artists: {}}, expectedActions, () => {
      nocked.done();
      return done();
    });

    store.dispatch(actions.getArtistDetails(ARTIST_ID));
  });
});