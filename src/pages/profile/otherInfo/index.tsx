import React, { FC } from 'react';
import { Col, Form, Input, Row } from 'antd';

import useStyles from './style';

const OtherInfo: FC = () => {
  const classes = useStyles();

  return (
    <Col span={14} className={classes.root}>
      <h4 className='data-module__title'>Інша інформація</h4>

      <Row gutter={[20, 0]} className='info__items'>
        <Col span={12}>
          <Form.Item name='education'>
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name='universityAddress'>
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name='position'>
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name='classes'>
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </Col>
  );
};

export default OtherInfo;
