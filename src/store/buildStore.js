import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from '../reducers/rootReducer';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function buildStore(initialState) {
  const store = createStoreWithMiddleware(appReducer, initialState);

  return store;
}