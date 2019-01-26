import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Icon } from 'antd';
import ErrorBoundary from '../../components/feedback/ErrorBoundary';
import CardCarousel from '../../components/card-carousel';

const CardItem = styled.div`
  width: 25%;
  float: left;
  cursor: pointer;

  &:hover {
    .media-heading {
      transition: all 0.3s;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
  }

  .media-heading {
    background-color: #F8F8F8;
    padding: 1rem 0.5rem;
    margin: 0 0.5rem;
    text-align: center;
    font-size: 3rem;
    transition: all 0.3s;
  }

  .media-body {
    text-align: center;
    color: #333;
    padding: 1rem 0;
  }
`;

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

function Shortcut(props) {
  return (
    <CardCarousel trigger="click" pageSize={8} cardTitle="快捷方式" height={248}>
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

Shortcut.propTypes = {

};

function ErrorWrapper(props) {
  return (<ErrorBoundary><Shortcut {...props} /></ErrorBoundary>);
}

export default ErrorWrapper;
