import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Input } from 'antd';

const Wrapper = styled.div`

`;

export default function ExamInput({ isRefresh, onChange }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue('');
  }, [isRefresh]);

  const handleChange = (e) => {
    const textVal = e.target.value;
    setValue(textVal);
    if (textVal.trim()) {
      onChange(textVal);
    }
  };

  return (
    <Wrapper>
      <Input type="text" value={value} onChange={handleChange} />
    </Wrapper>
  );
}

ExamInput.propTypes = {
  isRefresh: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
