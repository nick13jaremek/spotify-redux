import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import buildStore from './store/buildStore';

const store = buildStore(); // Build the Redux store to be used throughout the application

/* Append an initial HTML element to the index.html element identified with 'app'.
 * The 'Provider' is a special component which receives a Redux store as a prop. This store can then be made available to
 * the 'Provider' children through the 'connect' function on their Component definition.
 */
ReactDOM.render(
  <Provider store={store}>
    <div>
      Hello Yelp!
    </div>
  </Provider>,
  document.getElementById('app')
);
