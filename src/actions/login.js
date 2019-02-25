import { LOGIN_APP, GET_LOGIN_APP_STATUS } from '../action-types/login';
import reducerRegistry from '@core/store/reducer-registry';
import loginReducer from '../reducers/login';

reducerRegistry.register('loginApp', loginReducer);

/**
 * 登录
 * @param data
 * @returns {{type: string, data: *}}
 */
export function loginAppAction(data) {
  return {
    type: LOGIN_APP,
    data,
  };
}

/**
 * 获取登录状态，判断是否登录
 * @param data
 * @returns {{type: string, data: *}}
 */
export function getLoginStatusAction(data) {
  return {
    type: GET_LOGIN_APP_STATUS,
    data,
  };
}
