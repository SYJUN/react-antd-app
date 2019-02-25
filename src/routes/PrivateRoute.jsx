import * as React from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

const ReLogin = styled.p`
  width: 100%;
  height: 100%;
  margin: 50px auto;
  text-align: center;
  font-size: 20px;
  line-height: 50px;
`;

@withRouter
@connect(state => ({ loginApp: state.loginApp }))
class PrivateRoute extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    loginApp: PropTypes.object,
  };
  
  static defaultProps = {
    loginApp: {},
  };
  
  constructor(props) {
    super(props);
    
    if (!props.loginApp.isAuth) {
      const { history } = this.props;
      setTimeout(() => {
        history.replace('/login');
      }, 1000);
    }
  }
  
  render() {
    const { component: Component, ...rest } = this.props;
  
    return this.props.loginApp.isAuth ? <Route {...rest} render={props => <Component {...props} />} /> : <ReLogin>请登录...</ReLogin>;
  }
}

export default PrivateRoute;
