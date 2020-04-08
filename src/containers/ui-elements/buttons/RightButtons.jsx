import * as React from 'react';
import styled from 'styled-components';

import { Row, Col, Card, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import ErrorBoundary from '../../../components/feedback/ErrorBoundary';

const Item = styled.div`
  padding: 0.8rem 0;
`;

const StyledButton = styled(Button)`
  margin: 0.5rem;
`;

function RightButtons() {
  return (
    <Row gutter={{ xs: 8, sm: 16 }}>
      <Col sm={24}>
        <Item>
          <Card title="图标按钮">
            <StyledButton type="primary" shape="circle" icon={<SearchOutlined />} />
            <StyledButton type="primary" icon={<SearchOutlined />}>Search</StyledButton>
            <StyledButton shape="circle" icon={<SearchOutlined />} />
            <StyledButton icon={<SearchOutlined />}>Search</StyledButton>
            <br />
        
            <StyledButton shape="circle" icon={<SearchOutlined />} />
            <StyledButton icon={<SearchOutlined />}>Search</StyledButton>
            <StyledButton type="dashed" shape="circle" icon={<SearchOutlined />} />
            <StyledButton type="dashed" icon={<SearchOutlined />}>Search</StyledButton>
          </Card>
        </Item>
      </Col>
    
      <Col sm={24}>
        <Item>
          <Card title="不可用状态">
            <StyledButton type="primary">Primary</StyledButton>
            <StyledButton type="primary" disabled>Primary(disabled)</StyledButton>
            <br />
          
            <StyledButton>Default</StyledButton>
            <StyledButton disabled>Default(disabled)</StyledButton>
            <br />
          
            <StyledButton type="dashed">Dashed</StyledButton>
            <StyledButton type="dashed" disabled>Dashed(disabled)</StyledButton>
            <div style={{ padding: '8px 8px 0 8px', background: 'rgb(190, 200, 200)' }}>
              <StyledButton ghost>Ghost</StyledButton>
              <StyledButton ghost disabled>Ghost(disabled)</StyledButton>
            </div>
          </Card>
        </Item>
      </Col>
  
      <Col sm={24}>
        <Item>
          <Card title="幽灵按钮">
            <div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
              <StyledButton type="primary" ghost>Primary</StyledButton>
              <StyledButton ghost>Default</StyledButton>
              <StyledButton type="dashed" ghost>Dashed</StyledButton>
              <StyledButton type="danger" ghost>danger</StyledButton>
            </div>
          </Card>
        </Item>
      </Col>
  
      <Col sm={24}>
        <Item>
          <Card title="block 按钮">
            <StyledButton type="primary" block>Primary</StyledButton>
            <StyledButton block>Default</StyledButton>
            <StyledButton type="dashed" block>Dashed</StyledButton>
            <StyledButton type="danger" block>danger</StyledButton>
          </Card>
        </Item>
      </Col>
    </Row>
  );
}

function ErrorWrapper(props) {
  return (<ErrorBoundary><RightButtons {...props} /></ErrorBoundary>);
}

export default ErrorWrapper;
