import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

import SiderContainer from './Sider';
import FooterContainer from './Footer';

const layoutHeaderStyle = {
  position: 'fixed', 
  zIndex: 1, 
  width: '100%', 
  background: '#26344b', 
  padding: 0,
};

const layoutContentStyle = {
  margin: '70px 16px 0', 
  overflow: 'initial',
};

const Logo = styled.div`
  width: 120px;
  height: 31px;
  background: rgba(255,255,255,.2);  
  margin: 16px 28px 16px;
  float: left;
`;

const RouteStyled = styled.div`
  padding: 24px;
  background: #fff;
  text-align: center;
`;

class LayoutPage extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <SiderContainer />
        <Layout>
          <Layout.Header style={layoutHeaderStyle}>
            <Logo className="logo" />
          </Layout.Header>
          <Layout.Content style={layoutContentStyle}>
            <RouteStyled>{this.props.routes}</RouteStyled>
          </Layout.Content>
          <FooterContainer />
        </Layout>
      </Layout>
    );
  }
}

export default LayoutPage;