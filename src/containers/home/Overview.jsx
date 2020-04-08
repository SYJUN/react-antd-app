import * as React from 'react';
import styled from 'styled-components';

import { decimalize } from '../../utils/number';
import { FlagOutlined, SmileOutlined, DollarOutlined, TeamOutlined } from '@ant-design/icons';
import { Row, Col, Card } from 'antd';
import ErrorBoundary from '../../components/feedback/ErrorBoundary';

const List = styled.div`
  margin: 0.8rem 0;

  &:nth-child(1) {
    margin-top: 0;
  }

  &:last-child {
    margin: 0;
  }
`;

const Item = styled.div`
  .number {
    font-size: 2.8rem;
    line-height: 2.8rem;
    padding-bottom: 1rem;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    white-space: nowrap;
  }

  .footer {
    span:nth-child(1) {
      float: left;
    }

    span:nth-child(2) {
      float: right;
    }
  }
`;

const CardExtra = styled.span`
  background: ${props => props.bgColor ? props.bgColor : '#ddd'};
  padding: 0.2rem 0.5rem;
  border-radius: 0.2rem;
  color: #fff;
`;

function Icon({ iconName }) {
  switch (iconName) {
    case 'flag':
      return <FlagOutlined />;
    case 'smile':
      return <SmileOutlined />;
    case 'dollar':
      return <DollarOutlined />;
    case 'team':
      return <TeamOutlined />;
  }
}

function Overview() {
  const data = [
    [
      { id: 1, name: 'views', value: 9999996, total_label: '总计访问量', total_value: '88万', title: '访问量', extra: { bg_color: '#00a3f9', label: '月' } },
      { id: 2, name: 'download', value: 33555, total_label: '新下载', total_value: '10%', title: '下载', extra: { bg_color: '#294155', label: '周' } },
    ],
    [
      { id: 3, name: 'income', value: 999666, total_label: '总收入', total_value: '***', title: '收入', extra: { bg_color: '#009888', label: '年' } },
      { id: 4, name: 'active_user', value: 66666, total_label: '最近一个月', total_value: '15%', title: '活跃用户', extra: { bg_color: '#ffb437', label: '月' } },
    ],
  ];

  const iconNames = {
    views: 'flag',
    download: 'smile',
    income: 'dollar',
    active_user: 'team',
  };

  return data.map((item, idx) => {
    return (
      <List key={idx}>
        <Row gutter={{ xs: 8, sm: 16 }}>
          {item.map((o, k) => {
            return (
              <Col xs={24} sm={12} key={k}>
                <Card title={o.title} extra={<CardExtra bgColor={o.extra.bg_color}>{o.extra.label}</CardExtra>}>
                  <Item>
                    <div className="number">{decimalize(o.value, 0)}</div>
                    <div className="footer">
                      <span>{o.total_label}</span>
                      <span>{o.total_value} <Icon iconName={iconNames[o.name]} /></span>
                    </div>
                  </Item>
                </Card>
              </Col>
            );
          })}
        </Row>
      </List>
    );
  });
}

function ErrorWrapper(props) {
  return (<ErrorBoundary><Overview {...props} /></ErrorBoundary>);
}

export default ErrorWrapper;
