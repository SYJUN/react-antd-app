import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { clearfix } from '../../untils/style-consts';

import { Card } from 'antd';
import Group from './Group';

const StyledContent = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
  ${clearfix};
`;

class CardCarousel extends React.PureComponent {
  // 切割数组，用于每页显示的数量
  static splitColl(coll, num) {
    let collLen = coll.length;
    let result = [];
    for (let i = 0; i < collLen; i += num) {
      result.push(coll.slice(i, i + num));
    }
    return result;
  }

  state = {
    activeIdx: 0,
  };

  handleTrigger = (index) => {
    if (this.state.activeIdx === index) return;
    this.setState({ activeIdx: index });
  };

  render() {
    const { children, cardTitle, bordered, hoverable, pageSize, trigger, style } = this.props;
    const { activeIdx } = this.state;
    const splitData = CardCarousel.splitColl(children, pageSize);
    const total = Math.ceil(children.length / pageSize);
    const extra = total > 1 ? (<Group groups={splitData} activeIdx={activeIdx} trigger={trigger} onTrigger={this.handleTrigger} />) : '';

    return (
      <Card title={cardTitle} bordered={bordered} hoverable={hoverable} extra={extra}>
        {splitData.map((item, idx) => {
          return (
            <StyledContent key={idx} active={activeIdx === idx} style={style}>
              {item.map(o => o)}
            </StyledContent>
          );
        })}
      </Card>
    );
  }
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
  style: PropTypes.object,
};

CardCarousel.defaultProps = {
  pageSize: 4,
  bordered: true,
  hoverable: false,
  style: {},
};

export default CardCarousel;