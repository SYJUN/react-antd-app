import * as React from 'react';
import styled from 'styled-components';

import { Row, Col, Card } from 'antd';

import Overview from '../../containers/home/Overview';
import Shortcut from '../../containers/home/Shortcut';
import Tasks from '../../containers/home/Tasks';
import Versions from '../../containers/home/Versions';
import Dashboard from '../../containers/home/Dashboard';

const Wrapper = styled.div`
  width: 100%;
`;

const SpaceDivide = styled.div`
  height: 20px;
  visibility: hidden;
`;

class Home extends React.PureComponent {
  state = {};

  render() {
    return (
      <Wrapper>
        <Overview />
        <SpaceDivide />

        <Dashboard />
        <SpaceDivide />
        
        <Row gutter={24}>
          <Col span={8}>
            <Shortcut />
          </Col>
          <Col span={8}>
            <Tasks />
          </Col>
          <Col span={8}>
            <Versions />
          </Col>
        </Row>

      </Wrapper>
    );
  }
}

export default Home;