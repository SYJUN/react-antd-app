import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import assign from 'lodash/assign';

import { Radio } from 'antd';

const Wrapper = styled.div`
  width: 100%;
  padding: 5px 0;
`;

const OptionStyle = styled.div`
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
`;

export default class Item extends React.PureComponent {
  static propTypes = {
    parent: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    questionNum: PropTypes.number.isRequired,
    onChoice: PropTypes.func,
  };

  static defaultProps = {};

  state = {
    value: '',
  };

  constructor(props) {
    super(props);

    this.options = this.props.data.options ? this.props.data.options : [];
  }

  onChange = (data) => (e) => {
    const { onChoice, parent } = this.props;
    const value = e.target.value;
    if (value === this.state.value) return;
    this.setState({ value });

    if (onChoice) {
      onChoice(assign(data, { isRight: data.answer === value, selectValue: value, name: parent.name, title: parent.title }));
    }
  };

  render() {
    const { data, questionNum } = this.props;

    return (
      <Wrapper>
        <div>{questionNum}. {data.question}</div>
        <OptionStyle>
          <Radio.Group onChange={this.onChange(data)} value={this.state.value}>
            {this.options.map((option, idx) => (<Radio key={idx} value={option.value}>{option.value}．{option.name}</Radio>))}
          </Radio.Group>
        </OptionStyle>
      </Wrapper>
    );
  }
}
