import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 2000px;
`;

class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Wrapper>
        home page
      </Wrapper>
    );
  }
}

export default Home;