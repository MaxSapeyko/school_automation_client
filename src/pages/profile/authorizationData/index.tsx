import React, { FC } from 'react';
import { Col, Form, Input, Row } from 'antd';

import useStyles from './style';

const OtherInfo: FC = () => {
  const classes = useStyles();

  return (
    <Col xxl={10} span={24} className={classes.root}>
      <h4 className='data-module__title'>Авторизаційні дані</h4>

      <Row gutter={[20, 0]} className='info__items'>
        <Col span={12}>
          <Form.Item name='email'>
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name='password'>
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </Col>
  );
};

export default OtherInfo;
