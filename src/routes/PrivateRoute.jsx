import * as React from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

@withRouter
@connect(state => ({ loginApp: state.loginApp }))
class PrivateRoute extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    loginApp: PropTypes.object,
    component: PropTypes.func,
  };

  static defaultProps = {
    loginApp: {},
  };

  render() {
    const { component: Component, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={props => {
          return this.props.loginApp.isAuth ? (
            props.location.pathname === '/' ?
              (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />) :
              (<Component {...props} />)
          ) : (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />);
        }}
      />
    );
  }
}

export default PrivateRoute;
