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
  padding: 0.8rem 0;
`;

class Home extends React.PureComponent {
  state = {};

  render() {
    return (
      <Wrapper>
        <Row gutter={{ xs: 8, sm: 16 }}>
          <Col md={24} lg={24} xl={10}>
            <Section>
              <Overview />
            </Section>
          </Col>
          <Col md={24} lg={12} xl={7}>
            <Section>
              <Tasks />
            </Section>
          </Col>
          <Col md={24} lg={12} xl={7}>
            <Section>
              <Shortcut />
            </Section>
          </Col>
        </Row>
        
        <Dashboard />
  
        <Row gutter={{ xs: 8, sm: 16 }}>
          <Col sm={24} md={24} xl={10}>
            <Section>
              <Comments />
            </Section>
          </Col>
          <Col sm={24} md={12} xl={7}>
            <Section>
              <Activities />
            </Section>
          </Col>
          <Col sm={24} md={12} xl={7}>
            <Section>
              <Versions />
            </Section>
          </Col>
        </Row>

      </Wrapper>
    );
  }
}

export default Home;
