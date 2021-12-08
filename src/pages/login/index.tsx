import React, { FC } from 'react';
import { Form, Input, Button } from 'antd';

import Logo from '../../components/icons/Logo';

import useStyles from './style';
import Phone from '../../components/icons/Phone';
import Mail from '../../components/icons/Mail';

const Login: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.form}>
        <Logo className='logo__icon' />
        <h2 className='form__title'>
          Автоматизована інформаційна система супроводу навчання школярів
        </h2>
        <p className='form__description'>
          Для входу в систему заповніть наступну форму
        </p>

        <Form>
          <Form.Item name='email'>
            <Input placeholder='Email' className='form__item' />
          </Form.Item>

          <Form.Item name='password'>
            <Input.Password placeholder='Password' className='form__item' />
          </Form.Item>

          <Button htmlType='submit' type='primary' className='submit__btn'>
            Увійти
          </Button>
        </Form>
      </div>

      <div className={classes.footer}>
        <span className='help__text'>
          Якщо виникли труднощі з авторизацією, зверніться в дирекцію школи
        </span>

        <div className='help__items'>
          <a href='tel:(0472) 33-07-59' className='help__item'>
            <Phone />
            <span className='help__item-text'>(0472) 33-07-59</span>
          </a>

          <a href='mailto:best_school@gmail.com' className='help__item'>
            <Mail />
            <span className='help__item-text'>best_school@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
