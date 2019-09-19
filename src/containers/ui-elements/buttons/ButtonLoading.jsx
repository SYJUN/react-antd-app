import React, { useState } from 'react';
import styled from 'styled-components';

import { Card, Button } from 'antd';
import ErrorBoundary from '../../../components/feedback/ErrorBoundary';

const StyledButton = styled(Button)`
  margin: 0.5rem;
`;

function ButtonLoading() {
  const [loading, setLoading] = useState(false);
  const [iconLoading, setIconLoading] = useState(false);

  const enterLoading = () => {
    setLoading(true);
  };

  const enterIconLoading = () => {
    setIconLoading(true);
  };

  return (
    <Card title="加载中状态">
      <StyledButton type="primary" loading>
        Loading
      </StyledButton>
      <StyledButton type="primary" size="small" loading>
        Loading
      </StyledButton>
      <br />

      <StyledButton type="primary" loading={loading} onClick={enterLoading}>
        Click me!
      </StyledButton>
      <StyledButton type="primary" icon="poweroff" loading={iconLoading} onClick={enterIconLoading}>
        Click me!
      </StyledButton>
      <br />

      <StyledButton shape="circle" loading />
      <StyledButton type="primary" shape="circle" loading />
    </Card>
  );
}

function ErrorWrapper(props) {
  return (<ErrorBoundary><ButtonLoading {...props} /></ErrorBoundary>);
}

export default ErrorWrapper;
