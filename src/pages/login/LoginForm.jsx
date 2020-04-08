import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { loginAppAction } from '../../actions/login';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Button, Checkbox, Form } from 'antd';

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

const initialValues = {
  remember: true,
  userName: 'test',
  password: '1234',
};

const LoginForm = ({ onSubmit }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.loginApp, shallowEqual);

  const onFinish = () => {
    form.validateFields(['userName', 'password']).then(values => {
      if (values.userName !== 'test') {
        form.setFields([
          {
            name: 'userName',
            value: values.userName,
            errors: ['用户名不存在'],
          },
        ]);
        return;
      }

      if (values.password !== '1234') {
        form.setFields([
          {
            name: 'password',
            value: values.password,
            errors: ['密码不正确'],
          },
        ]);
        return;
      }

      if (values.userName === 'test' && values.password === '1234') {
        dispatch(loginAppAction({ userName: 'test', password: '1234' }));
        onSubmit();
      }
    });
  };

  return (
    <Wrapper>
      <Form
        form={form}
        onFinish={onFinish}
        className="login-form"
        initialValues={initialValues}
      >
        <Form.Item
          name="userName"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
        </Form.Item>

        <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
        </Form.Item>

        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">忘记密码?</a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
          Or <a href="">现在注册</a>
        </Form.Item>
      </Form>
    </Wrapper>
  );
};

LoginForm.propTypes = {
  loginApp: PropTypes.object,
  loginAppAction: PropTypes.func,
  onSubmit: PropTypes.func,
};

LoginForm.defaultProps = {
  loginApp: {},
  loginAppAction() {},
};

export default LoginForm;
