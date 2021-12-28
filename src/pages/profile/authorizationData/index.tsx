import React, { FC } from 'react';
import { Col, Form, Input, Row } from 'antd';

import useStyles from './style';
import { ProfileProps } from '..';

const OtherInfo: FC<Pick<ProfileProps, 'isCreate'>> = () => {
  const classes = useStyles();

  return (
    <Col xxl={10} span={24} className={classes.root}>
      <h4 className='data-module__title'>Авторизаційні дані</h4>

      <Row gutter={[0, 0]} className='info__items'>
        <Col span={12}>
          <Form.Item name='email'>
            <Input placeholder='Логін' />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name='password'>
            <Input placeholder=':password' />
          </Form.Item>
        </Col>
      </Row>
    </Col>
  );
};

export default OtherInfo;
