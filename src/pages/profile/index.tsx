import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { Form, notification, Row } from 'antd';
import useForm from 'antd/lib/form/hooks/useForm';

import { userService } from '../../services/userService';
import { storageService } from '../../services/storageService';
import { authService } from '../../services/authService';

import { UserDto } from '../../typings/user';

import Header from './header';
import AuthorizationData from './authorizationData';
import OtherInfo from './otherInfo';
import PersonalData from './personalData';

import { ACCESS_TOKEN_KEY } from '../../utils/common';
import { Role, Sex } from '../../utils/enums';

import useStyles from './style';

export interface ProfileProps {
  type: 'own' | 'teacher' | 'pupil';
  isCreate: boolean;
}

const Profile: FC<ProfileProps> = ({ type, isCreate }) => {
  const classes = useStyles();
  const history = useHistory();
  const [form] = useForm();

  const userId = history.location.pathname.split('/')[2];
  const [user, setUser] = useState<UserDto | null>(null);

  const getUser = async (id: string) => {
    try {
      const user = await userService.userById(id);

      setUser(user);

      form.setFieldsValue({
        ...user,
      });
    } catch (error) {
      authService.logout();
    }
  };

  const createUser = async (values: any) => {
    try {
      const body = {
        ...values,
        sex: Sex.Man,
        photoUrl: 'empty',
      };

      if (type === 'pupil') {
        body.role = Role.Student;
      }

      if (type === 'teacher') {
        body.classes = body.classes.split(',');
      }

      const newUser = await userService.createUser(body);

      if (type === 'pupil') {
        history.push(`/pupils/${newUser.id}`);
      }

      if (type === 'teacher') {
        history.push(`/teachers/${newUser.id}`);
      }
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'Bad Request',
      });
    }
  };

  useEffect(() => {
    if (userId) {
      getUser(userId);
    } else {
      const token: string | null = storageService.get(ACCESS_TOKEN_KEY);

      const decodedUser: any = jwt_decode(token!);

      getUser(decodedUser.id);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.root}>
      <Form form={form} onFinish={createUser}>
        <Header type={type} user={user} isCreate={isCreate} />

        <Row justify='space-between'>
          <PersonalData isCreate={isCreate} />
          <AuthorizationData isCreate={isCreate} />
        </Row>

        <Row>
          <OtherInfo type={type} isCreate={isCreate} />
        </Row>
      </Form>
    </div>
  );
};

export default Profile;
