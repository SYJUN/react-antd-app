import * as React from 'react';
import styled from 'styled-components';

import { decimalize } from '../../untils/number';
import { Row, Col, Card, Icon } from 'antd';
import ErrorBoundary from '../../components/feedback/ErrorBoundary';

const Wrapper = styled.div`
  width: 100%;
`;

const Item = styled.div`
  .number {
    font-size: 36px;
    line-height: 36px;
    padding: 5px 0 10px;
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
  padding: 2px 5px;
  border-radius: 2px;
  color: #fff;
`;

class Overview extends React.PureComponent {
  render() {
    const data = [
      { id: 1, name: 'views', value: 9999996, total_label: '总计访问量', total_value: '88万', title: '访问量', extra: { bg_color: '#00a3f9', label: '月' } },
      { id: 2, name: 'download', value: 33555, total_label: '新下载', total_value: '10%', title: '下载', extra: { bg_color: '#294155', label: '周' } },
      { id: 3, name: 'income', value: 999666, total_label: '总收入', total_value: '***', title: '收入', extra: { bg_color: '#009888', label: '年' } },
      { id: 4, name: 'active_user', value: 66666, total_label: '最近一个月', total_value: '15%', title: '活跃用户', extra: { bg_color: '#ffb437', label: '月' } },
    ];
    const iconNames = {
      views: 'flag',
      download: 'smile',
      income: 'pay-circle',
      active_user: 'team',
    };

    return (
      <Wrapper>
        <Row gutter={24}>
          {data.map((item, idx) => {
            return (
              <Col span={6} key={idx}>
                <Card title={item.title} extra={<CardExtra bgColor={item.extra.bg_color}>{item.extra.label}</CardExtra>}>
                  <Item>
                    <div className="number">{decimalize(item.value, 0)}</div>
                    <div className="footer">
                      <span>{item.total_label}</span>
                      <span>{item.total_value} <Icon type={iconNames[item.name]} /></span>
                    </div>
                  </Item>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Wrapper>
    );
  }
}

function ErrorWrapper(props) {
  return (<ErrorBoundary><Overview {...props} /></ErrorBoundary>);
}

export default ErrorWrapper;
