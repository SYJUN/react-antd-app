import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import styled from 'styled-components';
import ErrorBoundary from '../../components/feedback/ErrorBoundary';
import navList from './sider-nav-list';

import { Layout, Menu, Icon } from 'antd';

const SiderContainer = styled(Layout.Sider)`
  width: 100%;
  min-height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  overflow: hidden;
`;

const Logo = styled.div`
  width: 12rem;
  height: 3.1rem;
  background: rgba(255,255,255,.2);
  margin: 1.6rem 2.8rem 1.6rem;
  float: left;
`;

function Sider({ collapsed, collapsedWidth, width, breakpoint, onBreakpoint }) {
  return (
    <SiderContainer
      theme="dark"
      trigger={null}
      width={width}
      collapsible
      collapsedWidth={collapsedWidth}
      collapsed={collapsed}
      breakpoint={breakpoint}
      onBreakpoint={onBreakpoint}
    >
      <Logo className="logo" />
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        autoHeight
        autoHeightMin={0}
        autoHeightMax="100vh"
        thumbMinSize={30}
      >
        <Menu
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          defaultSelectedKeys={['0-0']}
        >
          {navList.map((item, navIdx) => {
            if (item.sub_menus) {
              return (
                <Menu.SubMenu
                  key={`0-${navIdx}`}
                  title={<span><Icon type={item.icon_type} /><span>{item.label}</span></span>}
                >
                  {item.sub_menus.map((sub, subIdx) => {
                    return (
                      <Menu.Item key={`0-${navIdx}-${subIdx}`}>
                        <NavLink to={sub.path}>
                          <Icon type={sub.icon_type} />
                          <span className="nav-text">{sub.label}</span>
                        </NavLink>
                      </Menu.Item>
                    );
                  })}
                </Menu.SubMenu>
              );
            }
            return (
              <Menu.Item key={`0-${navIdx}`}>
                <NavLink to={item.path}>
                  <Icon type={item.icon_type} />
                  <span className="nav-text">{item.label}</span>
                </NavLink>
              </Menu.Item>
            );
          })}
        </Menu>
      </Scrollbars>
    </SiderContainer>
  );
}

Sider.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  collapsedWidth: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  breakpoint: PropTypes.string.isRequired,
  onBreakpoint: PropTypes.func.isRequired,
};

function ErrorWrapper(props) {
  return (<ErrorBoundary><Sider {...props} /></ErrorBoundary>);
}

export default ErrorWrapper;
