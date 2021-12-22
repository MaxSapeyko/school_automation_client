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
import { useHistory } from 'react-router-dom';

export interface ProfileProps {
  type: 'own' | 'teacher' | 'pupil';
}

const Profile: FC<ProfileProps> = ({ type }) => {
  const classes = useStyles();
  const history = useHistory();
  const [form] = useForm();

  const userId = history.location.pathname.split('/')[2];

  const getUser = async (userId: string) => {
    const user = userService.userById(userId);
    console.log(user, 'user');

    form.setFieldsValue({
      ...user,
    });
  };

  const getMe = async () => {
    const me = await userService.userMe();
    console.log(me, 'me');
  };

  useEffect(() => {
    if (userId) {
      getUser(userId);
    } else {
      getMe();
    }

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
