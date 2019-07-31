import React, { PureComponent } from 'react';
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

class LayoutPage extends PureComponent {
  broken = false;
  
  state = {
    trigger: false,
    collapsed: false,
    width: 0,
    collapsedWidth: 0,
    ismini: 'no',
  };
  
  handleBreakpoint = broken => {
    this.broken = broken;
    if (broken) {
      this.setState({ collapsed: true, trigger: true });
    } else {
      this.setState({ collapsed: false, trigger: false });
    }
    
    this.setState({
      collapsedWidth: broken ? 0 : 80,
      width: broken ? 80 : 200,
      ismini: broken ? 'yes' : 'no',
    });
  };

  toggle = () => {
    if (this.broken) {
      this.setState({
        trigger: !this.state.trigger,
        collapsedWidth: this.state.trigger ? 80 : 0,
        width: this.state.trigger ? 80 : 0,
      });
    } else {
      this.setState({
        trigger: !this.state.trigger,
        collapsed: !this.state.collapsed,
      });
    }
  };

  render() {
    const { trigger, collapsed, collapsedWidth, width, ismini } = this.state;

    return (
      <Wrapper ismini={ismini}>
        <SiderContainer
          collapsed={collapsed}
          breakpoint="lg"
          collapsedWidth={collapsedWidth}
          width={width}
          onBreakpoint={this.handleBreakpoint}
        />
        <Layout className={trigger ? 'collapsed-layout' : 'no-collapsed-layout'}>
          <Header>
            <TriggerIcon
              type={trigger ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Layout.Content style={layoutContentStyle}>
            <RouteStyled>{this.props.routes}</RouteStyled>
            <BackTop visibilityHeight={400} />
          </Layout.Content>
          <FooterContainer />
        </Layout>
      </Wrapper>
    );
  }
}

LayoutPage.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default LayoutPage;
