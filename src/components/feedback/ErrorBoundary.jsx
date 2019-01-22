import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../utils/style-consts';

const Wrapper = styled.div`
  padding: 10px;
  height: 100%;
  width: 100%;
  display: flex;
  background-color: white;
`;

const Content = styled.div`
  align-self: center; // 会对齐当前 flex 行中的 flex 元素，并覆盖 align-items 的值. 如果任何 flex 元素的侧轴方向 margin 值设置为 auto，则会忽略 align-self。
  text-align: center;
  width: 100%;
`;

const Text = styled.div`
  color: ${colors.gray};
`;

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  componentDidCatch(error, info) {
    this.setState({ error });
  }

  render() {
    if (this.state.error) {
      return (
        <Wrapper>
          <Content>
            <Text>暂时出错了~~</Text>
          </Content>
        </Wrapper>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any.isRequired,
}

export default ErrorBoundary;
