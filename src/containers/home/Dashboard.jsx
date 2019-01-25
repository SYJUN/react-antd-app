import * as React from 'react';
import styled from 'styled-components';

import { Row, Col, Card, Progress } from 'antd';
import ErrorBoundary from '../../components/feedback/ErrorBoundary';

import LineChart from './charts/LineChart';

const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
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

const Section = styled.div`
  padding: 8px 0;
`;

function Dashboard() {
  return (
    <Wrapper>
      <Card title="数据预览" bordered={false}>
        <Row gutter={{ xs: 8, sm: 16 }}>
          <Col lg={24} xl={16}>
            <Section>
              <LineChart />
            </Section>
          </Col>
          <Col lg={24} xl={8}>
            <Section>
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
            </Section>
          </Col>
        </Row>
      </Card>
    </Wrapper>
  );
}

function ErrorWrapper(props) {
  return (<ErrorBoundary><Dashboard {...props} /></ErrorBoundary>);
}

export default ErrorWrapper;
