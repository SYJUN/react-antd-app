import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import apiMiddleware from './api-middleware';
import reducerRegistry from './reducer-registry';

const baseMiddleware = [];
if (process.env.NODE_ENV !== 'production') {
  const logger = require('redux-logger');
  baseMiddleware.push(logger.createLogger());
}

function configureStore(preloadedState = {}, { middleware = [] } = {}) {
  Object.keys(preloadedState).forEach(name => {
    reducerRegistry.register(name, (state = preloadedState[name]) => state);
  });

  const reducer = combineReducers(reducerRegistry.getReducers());
  const _middleware = middleware.concat(baseMiddleware);
  const store = createStore(reducer, applyMiddleware(thunkMiddleware, apiMiddleware, ..._middleware));

  // Replace the store's reducer whenever a new reducer is registered.
  reducerRegistry.setChangeListener(reducers => {
    store.replaceReducer(combineReducers(reducers));
  });

  return store;
}

export default configureStore;