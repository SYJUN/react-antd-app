import * as React from 'react';
import styled from 'styled-components';

import { Card, Button } from 'antd';
import ErrorBoundary from '../../../components/feedback/ErrorBoundary';

const StyledButton = styled(Button)`
  margin: 0.5rem;
`;

class ButtonLoading extends React.PureComponent {
  state = {
    loading: false,
    iconLoading: false,
  };
  
  enterLoading = () => {
    this.setState({ loading: true });
  };
  
  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };
  
  render() {
    return (
      <Card title="加载中状态">
        <StyledButton type="primary" loading>
          Loading
        </StyledButton>
        <StyledButton type="primary" size="small" loading>
          Loading
        </StyledButton>
        <br />
        
        <StyledButton type="primary" loading={this.state.loading} onClick={this.enterLoading}>
          Click me!
        </StyledButton>
        <StyledButton type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>
          Click me!
        </StyledButton>
        <br />
        
        <StyledButton shape="circle" loading />
        <StyledButton type="primary" shape="circle" loading />
      </Card>
    );
  }
}

function ErrorWrapper(props) {
  return (<ErrorBoundary><ButtonLoading {...props} /></ErrorBoundary>);
}

export default ErrorWrapper;
