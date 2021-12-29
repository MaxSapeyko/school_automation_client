import React, { FC } from 'react';
import { Col, Form, Input, Row } from 'antd';

import { ProfileProps } from '..';

import useStyles from './style';

const OtherInfo: FC<Pick<ProfileProps, 'type' | 'isCreate'>> = ({
  type,
  isCreate,
}) => {
  const classes = useStyles();

  if (type === 'pupil') {
    return (
      <Col span={24} className={classes.root}>
        <h4 className='data-module__title'>Інформація про батьків</h4>

        <Row gutter={[20, 0]} className='info__items'>
          <Col span={12}>
            <Form.Item required name='parentName'>
              <Input placeholder='Ім’я' disabled={!isCreate} />
            </Form.Item>
            <Form.Item required name='parentSurname'>
              <Input placeholder='Прізвище' disabled={!isCreate} />
            </Form.Item>
            <Form.Item required name='parentLastname'>
              <Input placeholder='Побатькові' disabled={!isCreate} />
            </Form.Item>
            <Form.Item required name='parentPhone'>
              <Input placeholder='Телефон' disabled={!isCreate} />
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
          <Form.Item required name='education'>
            <Input placeholder='Освіта' disabled={!isCreate} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item required name='universityAddress'>
            <Input placeholder='Закінчений вуз' disabled={!isCreate} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item required name='specialization'>
            <Input placeholder='Спеціалізація' disabled={!isCreate} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item required name='classes'>
            <Input placeholder='Оберіть клас(и)' disabled={!isCreate} />
          </Form.Item>
        </Col>
      </Row>
    </Col>
  );
};

export default OtherInfo;
