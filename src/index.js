import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Router, {Route} from 'react-router';
import history from './constants/History';

import buildStore from './store/buildStore';
import {AppContainer} from './components/App';
import Artists from './components/Artists';
import Albums from './components/Albums';
import Songs from './components/Songs';
import Index from './components/Index';

require('./style/main.scss');

const store = buildStore(); // Build the Redux store to be used throughout the application

/* Append an initial HTML element to the index.html element identified with 'app'.
 * The 'Provider' is a special component which receives a Redux store as a prop. This store can then be made available to
 * the 'Provider' children through the 'connect' function on their Component definition.
 */
const routes = <Route component={AppContainer}>
  <Route path="/" component={Index}/>
  <Route path="/artists" component={Artists} />
  <Route path="/albums" component={Albums} />
  <Route path="/songs" component={Songs} />
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
