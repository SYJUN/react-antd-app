import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Input } from 'antd';

const Wrapper = styled.div`

`;

export default class ExamInput extends React.PureComponent {
  static propTypes = {
    isRefresh: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  state = {
    value: '',
  };

  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.isRefresh !== this.props.isRefresh) {
      this.setState({ value: '' });
    }
  }

  onChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
    if (value.trim()) {
      this.props.onChange();
    }
  };

  render() {
    return (
      <Wrapper>
        <Input type="text" value={this.state.value} onChange={this.onChange} />
      </Wrapper>
    );
  }
}
