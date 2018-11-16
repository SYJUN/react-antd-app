import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Spin } from 'antd';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Spin(props) {
  return (
    <Wrapper>
      <Spin {...props} />
    </Wrapper> 
  );
}

Spin.propTypes = {};

export default Spin;