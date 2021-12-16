import React, { FC } from 'react';
import { Col, Form, Input, Row, Select } from 'antd';
import { useForm } from 'antd/lib/form/Form';

import Header from './header';

import useStyles from './style';
import { USERS_MOCK } from '../../MOCK/user';

const { Option } = Select;

const Subject: FC = () => {
  const classes = useStyles();
  const [form] = useForm();

  return (
    <div className={classes.root}>
      <Header />
      <Form form={form}>
        <Row justify='space-between'>
          <Col span={24}>
            <Form.Item name='name'>
              <Input placeholder='Назва предмета' />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name='surname'>
              <Input placeholder='Оберіть клас(и)' />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name='lastname'>
              <Select placeholder='Виберіть вчителя який викладає предмет'>
                {USERS_MOCK.map((user) => (
                  <Option
                    key={user.id}
                    value={user.id}
                  >{`${user.lastname} ${user.name} ${user.surname}`}</Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Subject;
