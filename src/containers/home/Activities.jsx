import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { CheckCircleTwoTone, ClockCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';

import { Card, Timeline } from 'antd';
import ErrorBoundary from '../../components/feedback/ErrorBoundary';

const Item = styled.div`
  width: 100%;
`;

const Title = styled.div`
  font-size: 16px;
  color: #666;
`;

const UserInfo = styled.div`
  font-size: 12px;
  padding: 5px 0;
  
  span:nth-child(1) {
    color: #ccc;
  }
  
  span:nth-child(2) {
    margin-left: 10px;
    color: #666;
  }
`;

const Details = styled.div`
  color: #666;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function Activities() {
  const data = [
    { id: 1, title: '创建项目1', content: '使用 react + webapck 搭建前端项目', create_at: '2019-01-23', author: 'Shinn', status: 'finish' },
    { id: 2, title: '创建项目2', content: '使用 react + webapck 搭建前端项目', create_at: '2019-01-23', author: 'Shinn', status: 'unfinished' },
    { id: 3, title: '创建项目3', content: '使用 react + webapck 搭建前端项目', create_at: '2019-01-23', author: 'Shinn', status: 'underway' },
    { id: 4, title: '创建项目4', content: '使用 react + webapck 搭建前端项目', create_at: '2019-01-23', author: 'Shinn', status: 'schedule' },
    { id: 5, title: '创建项目5', content: '使用 react + webapck 搭建前端项目', create_at: '2019-01-23', author: 'Shinn', status: 'schedule' },
  ];
  const icons = {
    finish: <CheckCircleTwoTone twoToneColor="#52c41a" />,         // 完成
    unfinished: <CloseCircleTwoTone twoToneColor="#eb2f96" />,     // 未完成
    underway: <ClockCircleTwoTone twoToneColor="#0095f9" />,       // 进行中
    schedule: '',   // 计划中
  };

  return (
    <Card title="任务列表">
      <Timeline>
        {data.map((item, idx) => {
          return (
            <Timeline.Item key={idx} dot={icons[item.status]}>
              <Item>
                <Title>{item.title}</Title>
                <UserInfo><span>{item.create_at}</span><span>{item.auth}</span></UserInfo>
                <Details>{item.content}</Details>
              </Item>
            </Timeline.Item>
          );
        })}
      </Timeline>
    </Card>
  );
}

Activities.propTypes = {};

function ErrorWrapper(props) {
  return (<ErrorBoundary><Activities {...props} /></ErrorBoundary>);
}

export default ErrorWrapper;
