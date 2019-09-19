import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Card, List, Avatar } from 'antd';
import ErrorBoundary from '../../components/feedback/ErrorBoundary';

const StyledContent = styled.div`
  span {
    font-size: 12px;
  }
  
  span.avatar {
    margin-right: 5px;
  }
`;

const Details = styled.div`
  line-height: 22px;
  padding: 5px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box; //作为弹性伸缩盒子模型显示。
  -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
  -webkit-line-clamp: 2; //显示的行
`;

function Comments() {
  const renderDescription = (item) => {
    return (
      <StyledContent>
        <Details title={item.description}>{item.description}</Details>
        <span className="avatar">{item.user}</span>
        <span className="time">{item.create_at}</span>
      </StyledContent>
    );
  };

  const renderItem = () => (item) => {
    return (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={item.avatar_url} />}
          title={item.title}
          description={renderDescription(item)}
        />
      </List.Item>
    );
  };

  const data = [
    {
      id: 1,
      user: 'Shinn',
      avatar_url: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      title: '呵呵哒~~',
      description: '上班错过公交，于是追着车跑，一个骑着电动车的人在公车旁边喊：“加油啊！ ”我心底突然涌上一股暖流，刚想感慨这世界的美好，那人又接着喊道：“师傅快加油，别让后面这逼追上了！',
      create_at: '2019-01-23 22:54',
    },
    {
      id: 2,
      user: 'Shinn',
      avatar_url: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      title: '呵呵哒~~',
      description: '一曲相思~~~',
      create_at: '2019-01-23 22:54',
    },
    {
      id: 3,
      user: 'Shinn',
      avatar_url: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      title: '呵呵哒~~',
      description: '悟空：人生最痛苦的事莫过于一阵风吹来过后，猪在呢，马在呢，人不在了！最最痛苦的莫过于还有一个二货这时会用最大的嗓门喊：大师兄！师傅被妖怪抓走了！以证明他的存在，然后接着发呆。',
      create_at: '2019-01-23 22:54',
    },
    {
      id: 4,
      user: 'Shinn',
      avatar_url: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      title: '呵呵哒~~',
      description: '一曲相思~~~',
      create_at: '2019-01-23 22:54',
    },
    {
      id: 5,
      user: 'Shinn',
      avatar_url: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      title: '呵呵哒~~',
      description: '一曲相思~~~',
      create_at: '2019-01-23 22:54',
    },
    {
      id: 6,
      user: 'Shinn',
      avatar_url: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      title: '呵呵哒~~',
      description: '一曲相思~~~',
      create_at: '2019-01-23 22:54',
    },
  ];

  return (
    <Card title="用户评论">
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={renderItem()}
      />
    </Card>
  );
}

Comments.propTypes = {};

function ErrorWrapper(props) {
  return (<ErrorBoundary><Comments {...props} /></ErrorBoundary>);
}

export default ErrorWrapper;
