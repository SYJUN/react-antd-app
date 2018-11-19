import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/layout';
import ErrorWrapper from '../../components/feedback';

import { Menu, Icon } from 'antd';

class Sider extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { children } = this.props;

    return (
      <Layout.Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
        <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text">nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span className="nav-text">nav 3</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="bar-chart" />
              <span className="nav-text">nav 4</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="cloud-o" />
              <span className="nav-text">nav 5</span>
            </Menu.Item>
            <Menu.Item key="6">
              <Icon type="appstore-o" />
              <span className="nav-text">nav 6</span>
            </Menu.Item>
            <Menu.Item key="7">
              <Icon type="team" />
              <span className="nav-text">nav 7</span>
            </Menu.Item>
            <Menu.Item key="8">
              <Icon type="shop" />
              <span className="nav-text">nav 8</span>
            </Menu.Item>
          </Menu>
      </Layout.Sider>
    );
  }
}

Sider.propTypes = {};

function ErrorWrapper({ ...props }) {
  return (<ErrorWrapper><Sider {...props} /></ErrorWrapper>);
}

export default ErrorWrapper;
