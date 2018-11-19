import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Spin } from 'antd';

const Wrapper = styled.div`
  text-align: center;
`;

function Spin({ style, className, ...props }) {
  return (
    <Wrapper style={style} className={className}>
      <AntdSpin {...props} />
    </Wrapper>
  );
}

Spin.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Spin;
