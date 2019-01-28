import * as React from 'react';
import styled from 'styled-components';

import { Card, Button, Radio, Icon } from 'antd';
import ErrorBoundary from '../../../components/feedback/ErrorBoundary';

const StyledButton = styled(Button)`
  margin: 0.5rem;
`;

class ButtonSize extends React.PureComponent {
  state = {
    size: 'large',
  };
  
  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  };
  
  render() {
    const { size } = this.state;
    
    return (
      <Card title="按钮尺寸">
        <Radio.Group value={size} onChange={this.handleSizeChange}>
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
        
        <StyledButton type="primary" shape="circle" icon="download" size={size} />
        <StyledButton type="primary" shape="round" icon="download" size={size}>Download</StyledButton>
        <StyledButton type="primary" icon="download" size={size}>Download</StyledButton>
        <br />
        
        <Button.Group size={size}>
          <StyledButton type="primary">
            <Icon type="left" />Backward
          </StyledButton>
          <StyledButton type="primary">
            Forward<Icon type="right" />
          </StyledButton>
        </Button.Group>
      </Card>
    );
  }
}

function ErrorWrapper(props) {
  return (<ErrorBoundary><ButtonSize {...props} /></ErrorBoundary>);
}

export default ErrorWrapper;
