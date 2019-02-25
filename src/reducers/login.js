import { LOGIN_APP, GET_LOGIN_APP_STATUS } from '../action-types/login';

export default function loginApp(state = {}, action) {
  if (action.type === LOGIN_APP) {
    const isAuth = action.data.userName === 'test' && action.data.password === '1234';
    if (isAuth) {
      window.localStorage.setItem('userName', action.data.userName);
    }
    
    return _.assign({}, state, { isAuth, userName: action.data.userName });
  } else if (action.type === GET_LOGIN_APP_STATUS) {
    const sessionStore = window.localStorage.getItem('userName');
    
    return _.assign({}, state, { isAuth: !!sessionStore, userName: sessionStore });
  }
  
  return state;
}
