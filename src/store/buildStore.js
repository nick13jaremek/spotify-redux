import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Map} from 'immutable';
import appReducer from '../reducers/RootReducer';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function buildStore(initialState) {
  const store = createStoreWithMiddleware(appReducer, initialState);

  return store;
}