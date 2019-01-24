import * as React from 'react';
import styled from 'styled-components';

import { Row, Col } from 'antd';

import Overview from '../../containers/home/Overview';
import Shortcut from '../../containers/home/Shortcut';
import Tasks from '../../containers/home/Tasks';
import Dashboard from '../../containers/home/Dashboard';
import Activities from '../../containers/home/Activities';
import Comments from '../../containers/home/Comments';
import Versions from '../../containers/home/Versions';

const Wrapper = styled.div`
  width: 100%;
`;

const Section = styled.div`
  padding: 8px 0;
`;

class Home extends React.PureComponent {
  state = {};

  render() {
    return (
      <Wrapper>
        <Section>
          <Row gutter={16}>
            <Col span={10}>
              <Overview />
            </Col>
            <Col span={7}>
              <Tasks />
            </Col>
            <Col span={7}>
              <Shortcut />
            </Col>
          </Row>
        </Section>
        
        <Section>
          <Dashboard />
        </Section>
        
        <Section>
          <Row gutter={16}>
            <Col span={8}>
              <Comments />
            </Col>
            <Col span={8}>
              <Activities />
            </Col>
            <Col span={8}>
              <Versions />
            </Col>
          </Row>
        </Section>

      </Wrapper>
    );
  }
}

export default Home;
