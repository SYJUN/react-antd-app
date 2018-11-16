import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '@core/store';
import reducerRegistry from '@core/store/reducer-registry';
import Router from './routes';

function customizer(objValue, srcValue) {
  if (_.isArray(objValue)) {
    return srcValue;
  }
}

const entities = (state = {}, action) => {
  if (action.data && action.data.entities) {
    return _.mergeWith({}, state, action.data.entities, customizer);
  }

  return state;
};

reducerRegistry.register('entities', entities);

const store = configureStore();

// React HashRouter 在没有 hash 的情况下会 redirect 到 html base 标签里的 href 路径上，所以这里预设一个 hash
if (/^(\/|\s*)$/.test(location.hash.substr(1))) {
  location.hash = '/home';
}

render();

function render() {
  // document.querySelector('#react-loading').style.display = 'none';

  ReactDOM.render((
    <Provider store={store}>
      <Router />
    </Provider>
  ), document.getElementById('react-container'));
}
