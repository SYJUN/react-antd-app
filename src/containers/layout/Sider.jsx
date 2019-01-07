import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import ErrorBoundary from '../../components/feedback/ErrorBoundary';

import { Menu, Icon } from 'antd';

const layoutSiderStyle = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  left: 0,
  top: '64px',
  background: '#232A32',
};

const menuStyle = {
  backgroundColor: '#232a32',
  color: '#999',
};

class Sider extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleMenuSelect = (opts) => {
    console.log(opts)
  };

  render() {
    const { children } = this.props;

    const navList = [
      { id: 1, label: 'nav 1', name: 'nav_1', icon_type: 'user' },
      { id: 2, label: 'nav 2', name: 'nav_2', icon_type: 'video-camera' },
      { id: 3, label: 'nav 3', name: 'nav_3', icon_type: 'upload' },
      { id: 4, label: 'nav 4', name: 'nav_4', icon_type: 'bar-chart' },
      { id: 5, label: 'nav 5', name: 'nav_5', icon_type: 'cloud-o' },
      { id: 6, label: 'nav 6', name: 'nav_6', icon_type: 'appstore-o' },
      { id: 7, label: 'nav 7', name: 'nav_7', icon_type: 'team' },
      { id: 8, label: 'nav 8', name: 'nav_8', icon_type: 'shop' },
    ];

    return (
      <Layout.Sider style={layoutSiderStyle}>
        <Menu 
        style={menuStyle} 
        mode="inline" 
        defaultSelectedKeys={['4']}
        onSelect={this.handleMenuSelect}
        >
          {navList.map(item => {
            return (
              <Menu.Item key={item.id}>
                <Icon type={item.icon_type} />
                <span className="nav-text">{item.label}</span>
              </Menu.Item>
            );
          })}
        </Menu>
      </Layout.Sider>
    );
  }
}

Sider.propTypes = {};

function ErrorWrapper(props) {
  return (<ErrorBoundary><Sider {...props} /></ErrorBoundary>);
}

export default ErrorWrapper;
