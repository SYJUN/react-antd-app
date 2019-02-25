import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { loginAppAction } from '../../actions/login';

import { Form, Icon, Input, Button, Checkbox } from 'antd';

const Wrapper = styled.div`
  width: 350px;
  margin: 0 auto;
  transform: translateY(50%);
  
  
  .login-form {
    max-width: 350px;
  }
  
  .login-form-forgot {
    float: right;
  }
  
  .login-form-button {
    width: 100%;
  }
`;

@Form.create({})
@connect(state => state.loginApp, { loginAppAction })
class LoginForm extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { form, onSubmit } = this.props;
    
    form.validateFields((err, values) => {
      if (!err) {
        if (values.userName !== 'test') {
          this.props.form.setFields({
            userName: {
              value: values.userName,
              errors: [new Error('用户不存在')],
            },
          });
          return;
        }
  
        if (values.password !== '1234') {
          this.props.form.setFields({
            password: {
              value: values.password,
              errors: [new Error('密码不正确')],
            },
          });
          return;
        }
        
        if (values.userName === 'test' && values.password === '1234') {
          this.props.loginAppAction({ userName: 'test', password: '1234' });
          onSubmit();
        }
      }
    });
  };
  
  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;

    return (
      <Wrapper>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入用户名' }],
              initialValue: 'test',
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
            )}
          </Form.Item>
          
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' }],
              initialValue: '1234',
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
            )}
          </Form.Item>
          
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="">忘记密码?</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
            Or <a href="">现在注册</a>
          </Form.Item>
        </Form>
      </Wrapper>
    );
  }
}

LoginForm.propTypes = {
  form: PropTypes.object,
  loginApp: PropTypes.object,
  loginAppAction: PropTypes.func,
  onSubmit: PropTypes.func,
};

LoginForm.defaultProps = {
  loginApp: {},
  loginAppAction() {},
};

export default LoginForm;
