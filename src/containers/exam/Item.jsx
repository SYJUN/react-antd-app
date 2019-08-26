import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as _ from 'lodash';

import { Radio, Button } from 'antd';

const Wrapper = styled.div`
  width: 100%;
  padding: 5px 0;
`;

const OptionStyle = styled.div`
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
`;

const QuestionTitleStyle = styled.div`
  //color: ${props => props.red ? '#f00' : ''};
`;

const TranslatePanelStyle = styled.div`
  background-color: #f1f1f1;
  padding: 6px 12px;
`;

const ButtonStyle = styled(Button)`
  margin-left: 6px;
`;

export default class Item extends React.PureComponent {
  static propTypes = {
    parent: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    questionNum: PropTypes.number.isRequired,
    enableTranslate: PropTypes.bool,
    onChoice: PropTypes.func,
  };

  static defaultProps = {
    enableTranslate: false,
  };

  state = {
    value: '',
    isTranslate: false,
    options: this.props.data.options ? this.props.data.options : [],
  };

  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.data !== this.props.data) {
      this.setState({
        value: this.props.data.selectValue,
        options: [...this.props.data.options],
      });
    }
  }

  onChange = (data) => (e) => {
    const { onChoice, parent } = this.props;
    const value = e.target.value;
    if (value === this.state.value) return;
    this.setState({ value });

    if (onChoice) {
      onChoice(_.assign(data, { isRight: data.answer === value, selectValue: value, name: parent.name, title: parent.title }));
    }
  };

  onTranslate = () => {
    this.setState({ isTranslate: !this.state.isTranslate });
  };

  render() {
    const { data, questionNum, enableTranslate } = this.props;

    return (
      <Wrapper>
        <QuestionTitleStyle red={data.selectValue && !data.isRight}>
          <span style={{ color: data.momentous ? '#f00' : '' }}>{questionNum}</span>. {data.question}
          {enableTranslate && (<ButtonStyle type="default" size="small" onClick={this.onTranslate}>译</ButtonStyle>)}
        </QuestionTitleStyle>
        {enableTranslate && this.state.isTranslate  && (
          <TranslatePanelStyle>{data.translate}</TranslatePanelStyle>
        )}
        <OptionStyle>
          <Radio.Group onChange={this.onChange(data)} value={this.state.value}>
            {this.state.options.map((option, idx) => (<Radio key={idx} value={option.value}>{option.value}．{option.name}</Radio>))}
          </Radio.Group>
        </OptionStyle>
      </Wrapper>
    );
  }
}
