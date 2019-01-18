import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDot = styled.div`
  background-color: ${props => props.active ? '#999' : '#e2e2e2'};
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 3px;
  font-size: 14px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #999;
    transition: all 0.3s;
  }
`;

function Dot({ active, index, trigger, onTrigger }) {
  function handleTrigger() {
    return () => {
      onTrigger(index);
    };
  }

  return (
    <StyledDot 
      active={active} 
      onClick={trigger === 'click' ? handleTrigger() : null} 
      onMouseEnter={trigger === 'hover' ? handleTrigger() : null} 
    />
  );
}

Dot.propTypes = {
  active: PropTypes.bool.isRequired,
  trigger: PropTypes.string,
  onTrigger: PropTypes.func.isRequired,
};

Dot.defaultProps = {
  trigger: 'hover',
};

export default Dot;