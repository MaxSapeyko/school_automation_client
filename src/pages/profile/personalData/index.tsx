import React, { FC } from 'react';
import { Col, Image, Form, Input, Row } from 'antd';

import useStyles from './style';

const PersonalData: FC = () => {
  const classes = useStyles();

  return (
    <Col span={24} xxl={14} className={classes.root}>
      <h4 className='data-module__title'>Особисті дані</h4>

      <div className='info__inner'>
        <Image src='assets/img/user_photo.jpg' className='user__photo' />

        <Row gutter={[20, 0]} className='info__items'>
          <Col span={12}>
            <Form.Item name='name'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name='surname'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name='lastname'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name='phone'>
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default PersonalData;
