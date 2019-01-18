import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Dot from './Dot';

const Wrapper = styled.div`
  display: inline-block;
`;

function Group({ groups, activeIdx, trigger, onTrigger }) {
  return (
    <Wrapper>
      {groups.map((item, idx) => {
        return (
          <Dot 
            key={idx} 
            active={activeIdx === idx}
            index={idx}
            trigger={trigger}
            onTrigger={onTrigger} 
          />
        );
      })}
    </Wrapper>
  );
}

Group.propTypes = {
  groups: PropTypes.array.isRequired,
  activeIdx: PropTypes.number.isRequired,
  trigger: PropTypes.string,
  onTrigger: PropTypes.func,
};

Group.defaultProps = {
  trigger: 'hover',   // ['hover', 'click']
  onTrigger: null,
};

export default Group;
