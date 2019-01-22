import * as React from 'react';
import PropTypes from 'prop-types';

import { Card, Table } from 'antd';
import ErrorBoundary from '../../components/feedback/ErrorBoundary';

const columns = [
  { title: '标签', dataIndex: 'label'  },
  { title: '信息', dataIndex: 'value'  },
];

const data = [
  { key: '1', label: '当前版本', value: 'v1.0.0' },
  { key: '2', label: '基于框架', value: 'antd-v.3.12.1' },
  { key: '3', label: '主要特色', value: '单页面 / 响应式 / 清爽 / 极简' },
];

function Versions() {
  return (
    <Card title="版本信息" bordered={false}>
      <div style={{ height: '204px' }}>
        <Table 
          bordered
          showHeader={false}
          pagination={false}
          columns={columns} 
          dataSource={data} 
        />
      </div>
    </Card>
  );
}

function ErrorWrapper(props) {
  return (<ErrorBoundary><Versions {...props} /></ErrorBoundary>);
}

export default ErrorWrapper;