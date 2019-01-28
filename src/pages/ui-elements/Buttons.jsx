import * as React from 'react';

import { Row, Col } from 'antd';
import LeftButtons from '../../containers/ui-elements/buttons/LeftButtons';
import RightButtons from '../../containers/ui-elements/buttons/RightButtons';

function Buttons() {
  return (
    <Row gutter={{ xs: 8, sm: 16 }}>
      <Col sm={24} md={12}>
        <LeftButtons />
      </Col>
      <Col sm={24} md={12}>
        <RightButtons />
      </Col>
    </Row>
  );
}

export default Buttons;
