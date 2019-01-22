import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Row, Col, Card, Progress, Divider } from 'antd';
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

const ProgressList = styled.div`
  padding: 15px;

  .title {
    padding-bottom: 10px;
    font-size: 20px;
    color: #666;
    line-height: 24px;
  }
`;

class Dashboard extends React.PureComponent {
  state = {};

  render() {
    return (
      <Wrapper>
        <Card title="数据预览" bordered={false}>
          <Row gutter={16}>
            <Col span={16}>
              <LineChart />
            </Col>
            <Col span={8}>
              <ProgressList>
                <div className="title">月访问数</div>
                <span>同上期增长</span>
                <Progress percent={50} strokeWidth={15} />
              </ProgressList>

              <ProgressList>
                <div className="title">月下载数</div>
                <span>同上期增长</span>
                <Progress percent={30} strokeWidth={15} />
              </ProgressList>

              <ProgressList>
                <div className="title">月收入</div>
                <span>同上期增长</span>
                <Progress percent={20} strokeWidth={15} />
              </ProgressList>
            </Col>
          </Row>
        </Card>
      </Wrapper>
    );
  }
}

function ErrorWrapper(props) {
  return (<ErrorBoundary><Dashboard {...props} /></ErrorBoundary>);
}

export default ErrorWrapper;