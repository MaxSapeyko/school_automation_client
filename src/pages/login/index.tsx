import React, { FC } from 'react';
import { Form, Input, Button } from 'antd';

import Logo from '../../components/icons/Logo';

import useStyles from './style';

const Login: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.form}>
        <Logo />
        <h2>Автоматизована інформаційна система супроводу навчання школярів</h2>
        <p>Для входу в систему заповніть наступну форму</p>

        <Form>
          <Form.Item name='email'>
            <Input />
          </Form.Item>

          <Form.Item name='password'>
            <Input.Password />
          </Form.Item>

          <Button htmlType='submit'>Увійти</Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
