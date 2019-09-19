import React, { useEffect, useState } from 'react';
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

export default function Item({ parent, data, questionNum, enableTranslate, onChoice }) {
  const [value, setValue] = useState('');
  const [isTranslate, setIsTranslate] = useState(false);
  const [options, setOptions] = useState(data.options ? data.options : []);

  useEffect(() => {
    setValue(data.selectValue);
    setOptions([...data.options]);
  }, [data]);

  const onChange = (data) => (e) => {
    const val = e.target.value;
    if (val === value) return;
    setValue(val);

    if (onChoice) {
      onChoice(_.assign(data, { isRight: data.answer === val, selectValue: val, name: parent.name, title: parent.title }));
    }
  };

  const onTranslate = () => {
    setIsTranslate(!isTranslate);
  };

  return (
    <Wrapper>
      <QuestionTitleStyle red={data.selectValue && !data.isRight}>
        <span style={{ color: data.momentous ? '#f00' : '' }}>{questionNum}</span>. {data.question}
        {enableTranslate && (<ButtonStyle type="default" size="small" onClick={onTranslate}>译</ButtonStyle>)}
      </QuestionTitleStyle>
      {enableTranslate && isTranslate  && (
        <TranslatePanelStyle>{data.translate}</TranslatePanelStyle>
      )}
      <OptionStyle>
        <Radio.Group onChange={onChange(data)} value={value}>
          {options.map((option, idx) => (<Radio key={idx} value={option.value}>{option.value}．{option.name}</Radio>))}
        </Radio.Group>
      </OptionStyle>
    </Wrapper>
  );
}

Item.propTypes = {
  parent: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  questionNum: PropTypes.number.isRequired,
  enableTranslate: PropTypes.bool,
  onChoice: PropTypes.func,
};

Item.defaultProps = {
  enableTranslate: false,
};
