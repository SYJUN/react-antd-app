import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as _ from 'lodash';
import { clearfix } from '../../utils/style-consts';

import { Card } from 'antd';
import Group from './Group';

const Content = styled.div`
  position: relative;
  width: 100%;
  height: ${props => props.height}px;
  ${clearfix};
`;

const StyledContent = styled.div`
  width: 100%;
  height: inherit;
  position: absolute;
  left: 0;
  top: 0;
  ${props => props.active ? `
    z-index: 10;
    opacity: 1;
  `: `
    z-index: 0;
    opacity: 0;
  `};
`;

const splitColl = (coll, num) => {
  let collLen = coll.length;
  let result = [];
  for (let i = 0; i < collLen; i += num) {
    result.push(coll.slice(i, i + num));
  }
  return result;
};

function CardCarousel({ children, cardTitle, bordered, hoverable, pageSize, trigger, height, reconstruct }) {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleTrigger = (index) => {
    if (activeIdx === index) return;
    setActiveIdx(index);
  };

  // 如果 children 不是 array 类型，或者数量小于等于1时，直接渲染
  if (!_.isArray(children) || children.length <= 1) {
    return (
      <Card title={cardTitle} bordered={bordered} hoverable={hoverable}>
        <Content height={height}>{children}</Content>
      </Card>
    );
  }
  const splitData = splitColl(children, pageSize);
  const total = Math.ceil(children.length / pageSize);
  const extra = total > 1 ? (<Group groups={splitData} activeIdx={activeIdx} trigger={trigger} onTrigger={handleTrigger} />) : '';

  return (
    <Card title={cardTitle} bordered={bordered} hoverable={hoverable} extra={extra}>
      <Content height={height}>
        {reconstruct ? splitData[activeIdx].map(o => o) : (
          splitData.map((item, idx) => {
            return (
              <StyledContent key={idx} active={activeIdx === idx}>
                {activeIdx === idx && item.map(o => o)}
              </StyledContent>
            );
          })
        )}
      </Content>
    </Card>
  );
}

CardCarousel.propTypes = {
  children: PropTypes.any.isRequired,
  pageSize: PropTypes.number,
  cardTitle: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.node.isRequired,
  ]),
  bordered: PropTypes.bool,
  hoverable: PropTypes.bool,
  reconstruct: PropTypes.bool,
  trigger: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
};

CardCarousel.defaultProps = {
  pageSize: 1,
  bordered: false,
  hoverable: false,
  reconstruct: false,
};

export default CardCarousel;
