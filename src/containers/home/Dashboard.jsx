import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Row, Col, Progress, Divider } from 'antd';
import ErrorBoundary from '../../components/feedback/ErrorBoundary';
import CardCarousel from '../../components/card-carousel';

import LineChart from './charts/LineChart';
import PieChart from './charts/PieChart';
import AreaChart from './charts/AreaChart';

const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 10px;
`;

class Dashboard extends React.PureComponent {
  state = {};

  render() {
    return (
      <Wrapper>
        <Row gutter={24}>
          <Col span={16}>
            <CardCarousel trigger="hover" pageSize={1} cardTitle="数据预览" height={400} reconstruct>
              <AreaChart />
              <PieChart />
              <LineChart />
            </CardCarousel>
          </Col>
          <Col span={8}>
            <div>月访问数</div>
            <div>
              <div>同上期增长</div>
              <Progress percent={69} strokeWidth={15} />
            </div>
          </Col>
        </Row>
      </Wrapper>
    );
  }
}

function ErrorWrapper(props) {
  return (<ErrorBoundary><Dashboard {...props} /></ErrorBoundary>);
}

export default ErrorWrapper;