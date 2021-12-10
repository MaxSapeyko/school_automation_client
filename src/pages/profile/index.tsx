import React, { FC, useEffect } from 'react';
import { Form, Row } from 'antd';
import useForm from 'antd/lib/form/hooks/useForm';

import Header from './header';
import AuthorizationData from './authorizationData';
import OtherInfo from './otherInfo';
import PersonalData from './personalData';

import { USER_MOCK } from '../../MOCK/user';

import useStyles from './style';

const Profile: FC = () => {
  const classes = useStyles();
  const [form] = useForm();

  useEffect(() => {
    form.setFieldsValue({
      ...USER_MOCK,
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.root}>
      <Header />
      <Form form={form}>
        <Row justify='space-between'>
          <PersonalData />
          <AuthorizationData />
        </Row>

        <Row>
          <OtherInfo />
        </Row>
      </Form>
    </div>
  );
};

export default Profile;
