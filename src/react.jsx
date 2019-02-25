import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '@core/store';
import reducerRegistry from '@core/store/reducer-registry';
import App from './routes/App';
import '../assets/stylesheets/main.scss';

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

function render() {
  // document.querySelector('#react-loading').style.display = 'none';

  ReactDOM.render((
    <Provider store={store}>
      <App />
    </Provider>
  ), document.getElementById('react-container'));
}


Promise.all([
  import('./actions/login'),
]).then(([{ getLoginStatusAction }]) => {
  // 获取登录状态信息
  store.dispatch(getLoginStatusAction());

  render();
}).catch(err => {
  window.alert(err.message);
});
