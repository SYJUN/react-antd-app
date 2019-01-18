import * as React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'antd';
import CardCarousel from '../../components/card-carousel';

import { CardItem } from './styled';

const data = [
  { id: 1, label: '主页1', name: 'page' },
  { id: 2, label: '主页2', name: 'page' },
  { id: 3, label: '主页3', name: 'page' },
  { id: 4, label: '主页4', name: 'page' },
  { id: 5, label: '主页5', name: 'page' },
  { id: 6, label: '主页6', name: 'page' },
  { id: 7, label: '主页7', name: 'page' },
  { id: 8, label: '主页8', name: 'page' },
  { id: 9, label: '主页9', name: 'page' },
];

function Tasks(props) {
  return (
    <CardCarousel trigger="hover" pageSize={8} cardTitle="快捷方式" style={{ height: '204px'}}>
      {data.map((item, idx) => {
        return (
          <CardItem key={idx}>
            <div className="media-heading">
              <Icon type="home" />
            </div>
            <div className="media-body">{item.label}</div>
          </CardItem>
        );
      })}
    </CardCarousel>
  );
}

Tasks.propTypes = {

};

export default Tasks;