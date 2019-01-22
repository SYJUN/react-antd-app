import * as React from 'react';
import PropTypes from 'prop-types';

import ErrorBoundary from '../../components/feedback/ErrorBoundary';
import CardCarousel from '../../components/card-carousel';

import { StyledTaskItem } from './styled';

const data = [
  { id: 1, label: '待审评论', value: 110 },
  { id: 2, label: '待审批帖子', value: 10 },
  { id: 3, label: '待审商品', value: 55 },
  { id: 4, label: '待发货', value: 76 },
  { id: 5, label: '待审友情链接', value: 10 },
];

function Tasks(props) {
  return (
    <CardCarousel trigger="hover" pageSize={4} cardTitle="快捷方式" height={204}>
      {data.map((item, idx) => {
        return (
          <StyledTaskItem key={idx} height={204}>
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