import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Card, List, Avatar } from 'antd';
import ErrorBoundary from '../../components/feedback/ErrorBoundary';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 5',
  },
];

class Comments extends React.PureComponent {
  
  renderItem = () => (item) => {
    return (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href="#">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    );
  };
  
  render() {
    return (
      <Card title="用户评论">
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={this.renderItem()}
        />
      </Card>
    );
  }
}

function ErrorWrapper(props) {
  return (<ErrorBoundary><Comments {...props} /></ErrorBoundary>);
}

export default ErrorWrapper;
