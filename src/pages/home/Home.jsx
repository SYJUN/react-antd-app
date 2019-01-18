import * as React from 'react';
import styled from 'styled-components';

import { Row, Col } from 'antd';

import Shortcut from '../../containers/home/Shortcut';
import Tasks from '../../containers/home/Tasks';

const Wrapper = styled.div`
  width: 100%;
`;

class Home extends React.PureComponent {
  state = {};

  render() {
    return (
      <Wrapper>
        <Row gutter={16}>
          <Col span={8}>
            <Shortcut />
          </Col>
          <Col span={8}>
            <Tasks />
          </Col>
          <Col span={8}>
            
          </Col>
        </Row>
      </Wrapper>
    );
  }
}

export default Home;