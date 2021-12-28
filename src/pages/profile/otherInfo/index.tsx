import React, { FC } from 'react';
import { Col, Form, Input, Row } from 'antd';

import { ProfileProps } from '..';

import useStyles from './style';

const OtherInfo: FC<Pick<ProfileProps, 'type' | 'isCreate'>> = ({ type }) => {
  const classes = useStyles();

  if (type === 'pupil') {
    return (
      <Col span={24} className={classes.root}>
        <h4 className='data-module__title'>Інформація про батьків</h4>

        <Row gutter={[20, 0]} className='info__items'>
          <Col span={12}>
            <Form.Item name='name'>
              <Input placeholder='Ім’я' />
            </Form.Item>
            <Form.Item name='surname'>
              <Input placeholder='Прізвище' />
            </Form.Item>
            <Form.Item name='lastname'>
              <Input placeholder='Побатькові' />
            </Form.Item>
            <Form.Item name='phone'>
              <Input placeholder='Телефон' />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name='name'>
              <Input placeholder='Ім’я' />
            </Form.Item>
            <Form.Item name='surname'>
              <Input placeholder='Прізвище' />
            </Form.Item>
            <Form.Item name='lastname'>
              <Input placeholder='Побатькові' />
            </Form.Item>
            <Form.Item name='phone'>
              <Input placeholder='Телефон' />
            </Form.Item>
          </Col>
        </Row>
      </Col>
    );
  }

  return (
    <Col span={24} className={classes.root}>
      <h4 className='data-module__title'>Інша інформація</h4>

      <Row gutter={[20, 0]} className='info__items'>
        <Col span={12}>
          <Form.Item name='education'>
            <Input placeholder='Освіта' />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name='universityAddress'>
            <Input placeholder='Закінчений вуз' />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name='specialization'>
            <Input placeholder='Спеціалізація' />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name='classes'>
            <Input placeholder='Оберіть клас(и)' />
          </Form.Item>
        </Col>
      </Row>
    </Col>
  );
};

export default OtherInfo;
