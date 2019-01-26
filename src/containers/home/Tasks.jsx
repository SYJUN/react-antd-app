import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ErrorBoundary from '../../components/feedback/ErrorBoundary';
import CardCarousel from '../../components/card-carousel';

const StyledTaskItem = styled.div`
  width: 50%;
  height: ${props => props.height / 2}px;
  float: left;
  padding: 1rem;
  color: #333;

  .content {
    width: 100%;
    height: 100%;
    padding: 0.8rem;
    cursor: pointer;
    background-color: #F8F8F8;
    transition: all 0.3s;

    &:hover {
      transition: all 0.3s;
      box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.15);
    }
  }

  .total {
    color: #459df5;
    font-size: 2.8rem;
    font-weight: 300;
    font-style: normal;
  }
`;

const data = [
  { id: 1, label: '待审评论', value: 110 },
  { id: 2, label: '待审批帖子', value: 10 },
  { id: 3, label: '待审商品', value: 55 },
  { id: 4, label: '待发货', value: 76 },
  { id: 5, label: '待审友情链接', value: 10 },
];

function Tasks(props) {
  return (
    <CardCarousel trigger="hover" pageSize={4} cardTitle="待办事项" height={248}>
      {data.map((item, idx) => {
        return (
          <StyledTaskItem key={idx} height={248}>
            <div className="content">
              <span>{item.label}</span>
              <div className="total">{item.value}</div>
            </div>
          </StyledTaskItem>
        );
      })}
    </CardCarousel>
  );
}

Tasks.propTypes = {

};

function ErrorWrapper(props) {
  return (<ErrorBoundary><Tasks {...props} /></ErrorBoundary>);
}

export default ErrorWrapper;
