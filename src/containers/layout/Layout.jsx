import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Layout, Icon } from 'antd';

import SiderContainer from './Sider';
import FooterContainer from './Footer';

const layoutContentStyle = {
  margin: '80px 16px 0', 
  overflow: 'initial',
};

const Wrapper = styled(Layout)`
  .collapsed-layout {
    width: 100%;
    padding-left: 80px;
    transition: all 0.3s;
  }

  .no-collapsed-layout {
    width: 100%;
    padding-left: 200px;
    transition: all 0.3s;
  }
`;

const Header = styled(Layout.Header)`
  position: fixed;
  z-index: 1;
  width: 100%;
  background: #fff;
  padding: 0;
  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
`;

const TriggerIcon = styled(Icon)`
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;

  &:hover {
    color: #1890ff;
  }
`;

const RouteStyled = styled.div`
  padding: 24px;
  background: #fff;
  text-align: center;
`;

class LayoutPage extends PureComponent {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { collapsed } = this.state;

    return (
      <Wrapper>
        <SiderContainer collapsed={collapsed} />
        <Layout className={collapsed ? 'collapsed-layout' : 'no-collapsed-layout'}>
          <Header>
            <TriggerIcon
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Layout.Content style={layoutContentStyle}>
            <RouteStyled>{this.props.routes}</RouteStyled>
          </Layout.Content>
          <FooterContainer />
        </Layout>
      </Wrapper>
    );
  }
}

export default LayoutPage;