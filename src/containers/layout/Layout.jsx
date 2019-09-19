import React, { useState, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Icon, BackTop } from 'antd';

import SiderContainer from './Sider';
import FooterContainer from './Footer';

const layoutContentStyle = {
  margin: '80px 16px 0',
  overflow: 'initial',
};

const Wrapper = styled(Layout)`
  .collapsed-layout {
    width: 100%;
    padding-left: ${props => props.ismini === 'no' ? '80px' : '0'};
    transition: all 0.3s;
    overflow: hidden;
  }

  .no-collapsed-layout {
    width: 100%;
    padding-left: ${props => props.ismini === 'no' ? '200px' : '80px'};
    transition: all 0.3s;
    overflow: hidden;
  }
`;

const Header = styled(Layout.Header)`
  position: fixed;
  z-index: 999;
  width: 100%;
  background: #fff !important;
  padding: 0 !important;
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
`;

const TriggerIcon = styled(Icon)`
  font-size: 1.8rem;
  line-height: 6.4rem;
  padding: 0 2.4rem;
  cursor: pointer;
  transition: color .3s;

  &:hover {
    color: #1890ff;
  }
`;

const RouteStyled = styled(Switch)`
  /* padding: 24px; */
  /* background: #fff; */
`;

function LayoutPage({ routes }) {
  const [trigger, setTrigger] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [width, setWidth] = useState(0);
  const [collapsedWidth, setCollapsedWidth] = useState(0);
  const [ismini, setMini] = useState('no');
  const [broken, setBroken] = useState(false);

  const handleBreakpoint = bool => {
    setBroken(bool);
  };

  const toggle = () => {
    setTrigger(!trigger);
    if (broken) {
      setCollapsedWidth(trigger ? 80 : 0);
      setWidth(trigger ? 80 : 0);
    } else {
      setCollapsed(!collapsed);
    }
  };

  useEffect(() => {
    if (broken) {
      setCollapsed(true);
      setTrigger(true);
    } else {
      setCollapsed(false);
      setTrigger(false);
    }
    setCollapsedWidth(broken ? 0 : 80);
    setWidth(broken ? 80 : 200);
    setMini(broken ? 'yes' : 'no');
  }, [broken]);

  return (
    <Wrapper ismini={ismini}>
      <SiderContainer
        collapsed={collapsed}
        breakpoint="lg"
        collapsedWidth={collapsedWidth}
        width={width}
        onBreakpoint={handleBreakpoint}
      />
      <Layout className={trigger ? 'collapsed-layout' : 'no-collapsed-layout'}>
        <Header>
          <TriggerIcon
            type={trigger ? 'menu-unfold' : 'menu-fold'}
            onClick={toggle}
          />
        </Header>
        <Layout.Content style={layoutContentStyle}>
          <RouteStyled>{routes}</RouteStyled>
          <BackTop visibilityHeight={400} />
        </Layout.Content>
        <FooterContainer />
      </Layout>
    </Wrapper>
  );
}

LayoutPage.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default LayoutPage;
