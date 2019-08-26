import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import find from 'lodash/find';
import forEach from 'lodash/forEach';
import assign from 'lodash/assign';

import { Button, Collapse } from 'antd';
import Item from '../../containers/exam/Item';
import SubmitPanel from '../../containers/exam/SubmitPanel';
import ExamInput from '../../containers/exam/Input';

// actions
import { getExamDataAction, refreshExamDataAction, submitExamAction } from '../../actions/exam';

// dbs
import englishDB from '@public/db/english_B';

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

@connect(state => ({ list: state.exam }), { getExamDataAction, refreshExamDataAction, submitExamAction })
export default class English extends React.PureComponent {
  static propTypes = {
    list: PropTypes.array,
    getExamDataAction: PropTypes.func.isRequired,
    refreshExamDataAction: PropTypes.func.isRequired,
    submitExamAction: PropTypes.func.isRequired,
  };

  static defaultProps = {
    list: [],
  };

  state = {
    isRefresh: false,
    visible: false,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getExamDataAction({
      list: englishDB,
      limits: [
        { name: 'vocabulary_english', maxCount: 15 },
        { name: 'english_chinese_translation', maxCount: 10 },
      ],
    });
  }

  onChoice = (result) => {
    const findCategory = find(this.props.list, o => o.name === result.name);
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
    this.setState({ isRefresh: true });
    this.props.refreshExamDataAction({
      list: englishDB,
      limits: [
        { name: 'vocabulary_english', maxCount: 15 },
        { name: 'english_chinese_translation', maxCount: 10 },
      ],
    });
  };

  handleSubmitPanelOk = bool => {
    this.setState({ visible: bool });
  };

  onInputChange = () => {
    this.setState({ isRefresh: false });
  };

  render() {
    const { list } = this.props;

    return (
      <Wrapper>
        <div>
          <Button.Group>
            <Button type="primary" onClick={this.onSubmit}>交卷</Button>
            <Button type="primary" onClick={this.onRefresh}>刷新</Button>
          </Button.Group>
        </div>
        <div>
          {list.map((item, idx) => {
            if (item.type === 'choice') {
              return (
                <div key={idx}>
                  <Title>{idx + 1}、{item.title}</Title>
                  <div>
                    {item.data.map(question => {
                      return (
                        <Item
                          key={question.questionNum}
                          enableTranslate
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
            } else if (item.type === 'translation') {
              return (
                <div key={idx}>
                  <Title>{idx + 1}、{item.title}</Title>
                  <div>
                    {item.data.map(question => {
                      return (
                        <div key={question.questionNum}>
                          <Collapse bordered={false}>
                            <Collapse.Panel
                              key="1"
                              showArrow={false}
                              header={`${question.questionNum}、${question.question}`}
                            >
                              <span>{question.answer}</span>
                            </Collapse.Panel>
                          </Collapse>
                          <ExamInput isRefresh={this.state.isRefresh} onChange={this.onInputChange} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return null;
          })}
        </div>
        <SubmitPanel list={list} visible={this.state.visible} onOk={this.handleSubmitPanelOk} />
      </Wrapper>
    );
  }
}
