import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { Form, Row } from 'antd';
import useForm from 'antd/lib/form/hooks/useForm';

import { userService } from '../../services/userService';

import Header from './header';
import AuthorizationData from './authorizationData';
import OtherInfo from './otherInfo';
import PersonalData from './personalData';

import useStyles from './style';
import { storageService } from '../../services/storageService';
import { ACCESS_TOKEN_KEY } from '../../utils/common';

export interface ProfileProps {
  type: 'own' | 'teacher' | 'pupil';
}

const Profile: FC<ProfileProps> = ({ type }) => {
  const classes = useStyles();
  const history = useHistory();
  const [form] = useForm();

  const userId = history.location.pathname.split('/')[2];

  const getUser = async (userId: string) => {
    const user = await userService.userById(userId);

    form.setFieldsValue({
      ...user,
    });
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
