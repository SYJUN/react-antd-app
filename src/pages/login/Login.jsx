import * as React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';

@withRouter
@connect(state => ({ loginApp: state.loginApp }))
export default class Login extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    loginApp: PropTypes.object,
    getLoginStatusAction: PropTypes.func,
  };
  
  static defaultProps = {
    loginApp: {},
  };
  
  handleLogin = () => {
    const { history } = this.props;
    if (history) history.replace('/home');
  };
  
  render() {
    return this.props.loginApp.isAuth ? <Redirect to={{ pathname: '/home' }} /> : <LoginForm history={history} onSubmit={this.handleLogin} />;
  }
}
