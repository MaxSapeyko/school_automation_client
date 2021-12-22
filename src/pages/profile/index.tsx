import React, { FC, useEffect } from 'react';
import { Form, Row } from 'antd';
import useForm from 'antd/lib/form/hooks/useForm';

import Header from './header';
import AuthorizationData from './authorizationData';
import OtherInfo from './otherInfo';
import PersonalData from './personalData';

import { USER_MOCK } from '../../MOCK/user';

import useStyles from './style';
import { userService } from '../../services/userService';

export interface ProfileProps {
  type: 'own' | 'teacher' | 'pupil';
}

const Profile: FC<ProfileProps> = ({ type }) => {
  const classes = useStyles();
  const [form] = useForm();

  const getUser = async (userId: string) => {
    const user = userService.userById(userId);
    console.log(user);

    form.setFieldsValue({
      ...user,
    });
  };

  useEffect(() => {
    getUser();

    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.root}>
      <Header type={type} />

      <Form form={form}>
        <Row justify='space-between'>
          <PersonalData />
          <AuthorizationData />
        </Row>

        <Row>
          <OtherInfo type={type} />
        </Row>
      </Form>
    </div>
  );
};

export default Profile;
