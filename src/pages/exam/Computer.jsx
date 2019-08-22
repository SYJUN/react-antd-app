import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import find from 'lodash/find';
import forEach from 'lodash/forEach';
import assign from 'lodash/assign';

import { Button } from 'antd';
import Item from '../../containers/exam/Item';
import SubmitPanel from '../../containers/exam/SubmitPanel';

// dbs
import computerDB from '@public/db/computer';

// actions
import { getExamDataAction, submitExamAction, refreshExamDataAction } from '../../actions/exam';

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

@connect(state => ({ list: state.exam }), { getExamDataAction, submitExamAction, refreshExamDataAction })
export default class Computer extends React.PureComponent {
  static propTypes = {
    list: PropTypes.array,
    getExamDataAction: PropTypes.func.isRequired,
    submitExamAction: PropTypes.func.isRequired,
    refreshExamDataAction: PropTypes.func.isRequired,
  };

  static defaultProps = {
    list: [],
  };

  state = {
    visible: false,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getExamDataAction({
      list: computerDB,
      limits: [
        { name: 'basic', maxCount: 20 },
        { name: 'windows', maxCount: 10 },
        { name: 'word', maxCount: 10 },
      ],
    });
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
    this.props.submitExamAction(this.props.list);
    this.setState({ visible: true });
  };

  onRefresh = () => {
    this.props.refreshExamDataAction({
      list: computerDB,
      limits: [
        { name: 'basic', maxCount: 20 },
        { name: 'windows', maxCount: 10 },
        { name: 'word', maxCount: 10 },
      ],
    });
  };

  handleSubmitPanelOk = bool => {
    this.setState({ visible: bool });
  };

  render() {
    return (
      <Wrapper>
        <div>
          <Button.Group>
            <Button type="primary" onClick={this.onSubmit}>交卷</Button>
            <Button type="primary" onClick={this.onRefresh}>刷新</Button>
          </Button.Group>
        </div>
        <div>
          {this.props.list.map((item, idx) => {
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
        <SubmitPanel list={this.props.list} visible={this.state.visible} onOk={this.handleSubmitPanelOk} />
      </Wrapper>
    );
  }
}
