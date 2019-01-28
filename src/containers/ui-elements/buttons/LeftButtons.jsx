import * as React from 'react';
import styled from 'styled-components';

import { Row, Col, Card, Button, Icon, Dropdown, Menu } from 'antd';
import ErrorBoundary from '../../../components/feedback/ErrorBoundary';

import ButtonSize from './ButtonSize';
import ButtonLoading from './ButtonLoading';

const ButtonGroup = Button.Group;

const Item = styled.div`
  padding: 0.8rem 0;
`;

const StyledButton = styled(Button)`
  margin: 0.5rem;
`;

function handleMenuClick(e) {
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

function LeftButtons() {
  return (
    <Row gutter={{ xs: 8, sm: 16 }}>
      <Col sm={24}>
        <Item>
          <Card title="按钮类型">
            <StyledButton type="primary">Primary</StyledButton>
            <StyledButton>Default</StyledButton>
            <StyledButton type="dashed">Dashed</StyledButton>
            <StyledButton type="danger">Danger</StyledButton>
          </Card>
        </Item>
      </Col>
  
      <Col sm={24}>
        <Item>
          <ButtonSize />
        </Item>
      </Col>
  
      <Col sm={24}>
        <Item>
          <ButtonLoading />
        </Item>
      </Col>
  
      <Col sm={24}>
        <Item>
          <Card title="按钮组合">
            <h4>Basic</h4>
            <ButtonGroup>
              <StyledButton>Cancel</StyledButton>
              <StyledButton>OK</StyledButton>
            </ButtonGroup>
            <ButtonGroup>
              <StyledButton disabled>L</StyledButton>
              <StyledButton disabled>M</StyledButton>
              <StyledButton disabled>R</StyledButton>
            </ButtonGroup>
            <ButtonGroup>
              <StyledButton>L</StyledButton>
              <StyledButton>M</StyledButton>
              <StyledButton>R</StyledButton>
            </ButtonGroup>
    
            <h4>With Icon</h4>
            <ButtonGroup>
              <StyledButton type="primary">
                <Icon type="left" />Go back
              </StyledButton>
              <StyledButton type="primary">
                Go forward<Icon type="right" />
              </StyledButton>
            </ButtonGroup>
            <ButtonGroup>
              <StyledButton type="primary" icon="cloud" />
              <StyledButton type="primary" icon="cloud-download" />
            </ButtonGroup>
          </Card>
        </Item>
      </Col>
  
      <Col sm={24}>
        <Item>
          <Card title="多按钮组合">
            <StyledButton type="primary">primary</StyledButton>
            <StyledButton>secondary</StyledButton>
            <Dropdown overlay={menu}>
              <StyledButton>
                Actions <Icon type="down" />
              </StyledButton>
            </Dropdown>
          </Card>
        </Item>
      </Col>
    </Row>
  );
}

function ErrorWrapper(props) {
  return (<ErrorBoundary><LeftButtons {...props} /></ErrorBoundary>);
}

export default ErrorWrapper;
