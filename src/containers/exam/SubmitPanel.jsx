import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button, Modal, Row, Col, Tooltip } from 'antd';

const CategoryWrapper = styled.div`
  margin-bottom: 10px;
`;

const Text = styled.span`
  color: ${props => props.red ? '#f00' : ''};
`;

const Title = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 10px;
`;

export default function SubmitPanel({ list, visible, onOk }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  const handleOk = () => {
    setIsVisible(false);
    if (onOk) {
      onOk(false);
    }
  };

  return (
    <Modal
      title="答题情况"
      visible={isVisible}
      destroyOnClose
      keyboard={false}
      maskClosable={false}
      closable={false}
      footer={<Button type="primary" onClick={handleOk}>确定</Button>}
    >
      {list.map((item, idx) => {
        return (
          <CategoryWrapper key={idx}>
            <Title>{item.title}</Title>
            <Row gutter={16}>
              {item.data.map((item, idx) => {
                return (
                  <Col span={4} key={idx}>
                    {item.questionNum}、
                    <Tooltip title={item.answer}>
                      <Text red={!item.isRight}>{item.selectValue}</Text>
                    </Tooltip>
                  </Col>
                );
              })}
            </Row>
          </CategoryWrapper>
        );
      })}
    </Modal>
  );
}

SubmitPanel.propTypes = {
  list: PropTypes.array.isRequired,
  visible: PropTypes.bool.isRequired,
  onOk: PropTypes.func,
};
