import React, { FC } from 'react';
import { Col, Image, Form, Input, Row } from 'antd';

import { ProfileProps } from '..';

import { USER_IMAGE_MOCK } from '../../../utils/common';

import useStyles from './style';

const PersonalData: FC<Pick<ProfileProps, 'isCreate'>> = ({ isCreate }) => {
  const classes = useStyles();

  return (
    <Col span={24} xxl={14} className={classes.root}>
      <h4 className='data-module__title'>Особисті дані</h4>

      <div className='info__inner'>
        <Image src={USER_IMAGE_MOCK} className='user__photo' />

        <Row gutter={[20, 0]} className='info__items'>
          <Col span={12}>
            <Form.Item required name='name'>
              <Input placeholder='Ім’я' disabled={!isCreate} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item required name='surname'>
              <Input placeholder='Побатькові' disabled={!isCreate} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item required name='lastname'>
              <Input placeholder='Прізвище' disabled={!isCreate} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item required name='phone'>
              <Input placeholder='Телефон' disabled={!isCreate} />
            </Form.Item>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default PersonalData;
