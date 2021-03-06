import React, { useState } from 'react';
import styled from 'styled-components';

import { LeftOutlined, RightOutlined, DownloadOutlined } from '@ant-design/icons';

import { Card, Button, Radio } from 'antd';
import ErrorBoundary from '../../../components/feedback/ErrorBoundary';

const StyledButton = styled(Button)`
  margin: 0.5rem;
`;

function ButtonSize() {
  const [size, setSize] = useState('large');

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  return (
    <Card title="按钮尺寸">
      <Radio.Group value={size} onChange={handleSizeChange}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="default">Default</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <br /><br />

      <StyledButton type="primary" size={size}>Primary</StyledButton>
      <StyledButton size={size}>Normal</StyledButton>
      <StyledButton type="dashed" size={size}>Dashed</StyledButton>
      <StyledButton type="danger" size={size}>Danger</StyledButton>
      <br />

      <StyledButton type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
      <StyledButton type="primary" shape="round" icon={<DownloadOutlined />} size={size}>Download</StyledButton>
      <StyledButton type="primary" icon={<DownloadOutlined />} size={size}>Download</StyledButton>
      <br />

      <Button.Group size={size}>
        <StyledButton type="primary">
          <LeftOutlined />Backward
        </StyledButton>
        <StyledButton type="primary">
          Forward<RightOutlined />
        </StyledButton>
      </Button.Group>
    </Card>
  );
}

function ErrorWrapper(props) {
  return (<ErrorBoundary><ButtonSize {...props} /></ErrorBoundary>);
}

export default ErrorWrapper;
