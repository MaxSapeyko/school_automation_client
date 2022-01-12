import React, { FC } from 'react';
import { Col, Form, Input, Row } from 'antd';

import useStyles from './style';
import { ProfileProps } from '..';
import { Role } from '../../../utils/enums';
import { appState } from '../../../context/AppState';

const OtherInfo: FC<Pick<ProfileProps, 'isCreate'>> = ({ isCreate }) => {
  const classes = useStyles();

  return (
    <Col xxl={10} span={24} className={classes.root}>
      <h4 className='data-module__title'>Авторизаційні дані</h4>

      <Row gutter={[0, 0]} className='info__items'>
        <Col span={12}>
          <Form.Item required name='email'>
            <Input placeholder='Логін' disabled={!isCreate} />
          </Form.Item>
        </Col>
        {appState.currentUser?.role === Role.Administator && (
          <Col span={12}>
            <Form.Item required name='password'>
              <Input placeholder=':password' disabled={!isCreate} />
            </Form.Item>
          </Col>
        )}
      </Row>
    </Col>
  );
};

export default OtherInfo;
