import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import find from 'lodash/find';
import forEach from 'lodash/forEach';
import assign from 'lodash/assign';

import { Button } from 'antd';
import Item from '../../containers/exam/Item';
import SubmitPanel from '../../containers/exam/SubmitPanel';

// dbs
import computerDB from '@public/db/computer';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 12px;
  background-color: #fff;
`;

const Title = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 16px;
`;

export default class Computer extends React.PureComponent {
  static propTypes = {};

  static defaultProps = {};

  state = {
    visible: false,
  };

  answerList = [];
  list = computerDB.data ? computerDB.data : [];

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('this.list: ', this.list);
  }

  onChoice = (result) => {
    const findCategory = find(this.list, o => o.name === result.name);
    if (findCategory) {
      forEach(findCategory.data, o => {
        if (o.id === result.id) {
          assign(o, result);
        }
      });
    }
  };

  onSubmit = () => {
    console.log('submit list: ', this.list);
    this.setState({ visible: true });
  };

  handleSubmitPanelOk = bool => {
    this.setState({ visible: bool });
  };

  render() {
    return (
      <Wrapper>
        <div>
          <Button type="primary" onClick={this.onSubmit}>交卷</Button>
        </div>
        <div>
          {this.list.map((item, idx) => {
            return (
              <div key={idx}>
                <Title>{item.title}</Title>
                <div>
                  {item.data.map(question => {
                    return (
                      <Item
                        key={question.questionNum}
                        parent={item}
                        data={question}
                        questionNum={question.questionNum}
                        onChoice={this.onChoice}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <SubmitPanel list={this.list} visible={this.state.visible} onOk={this.handleSubmitPanelOk} />
      </Wrapper>
    );
  }
}
