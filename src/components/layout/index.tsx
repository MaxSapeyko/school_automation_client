import React, { FC, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

import { appState } from '../../context/AppState';
import { authService } from '../../services/authService';
import { storageService } from '../../services/storageService';
import { userService } from '../../services/userService';
import { ACCESS_TOKEN_KEY } from '../../utils/common';

import Content from './content';
import Header from './header';
import Sider from './sider';

import useStyles from './style';

const Layout: FC = ({ children }) => {
  const classes = useStyles();

  const getUser = async (id: string) => {
    try {
      const user = await userService.userById(id);
      appState.currentUser = user;
    } catch (error) {
      authService.logout();
    }
  };

  useEffect(() => {
    if (!appState.currentUser) {
      const token: string | null = storageService.get(ACCESS_TOKEN_KEY);
      const decodedUser: any = jwt_decode(token!);

      getUser(decodedUser.id);
    }
    // eslint-disable-next-line
  }, [appState.currentUser]);

  return (
    <section className={classes.root}>
      <Sider />
      <section className='main'>
        <Header />
        <Content>{children}</Content>
      </section>
    </section>
  );
};

export default Layout;
