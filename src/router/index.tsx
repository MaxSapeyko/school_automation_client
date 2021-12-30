import React, { FC, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import PrivateRoute from './privateRoute';

import Login from '../pages/login';

import { ROUTES } from './routes';

import { storageService } from '../services/storageService';
import { authService } from '../services/authService';
import { userService } from '../services/userService';
import { appState } from '../context/AppState';
import { ACCESS_TOKEN_KEY } from '../utils/common';

const Routes: FC = () => {
  const getUser = async (id: string) => {
    try {
      const user = await userService.userById(id);
      appState.currentUser = user;
    } catch (error) {
      authService.logout();
    }
  };

  useEffect(() => {
    const token: string | null = storageService.get(ACCESS_TOKEN_KEY);

    const decodedUser: any = jwt_decode(token!);

    getUser(decodedUser.id);
  }, []);

  return (
    <Switch>
      <Route path='/login'>
        <Login />
      </Route>

      {ROUTES.map((route: IRoute, index: number) => {
        if (route.private) {
          return (
            <PrivateRoute path={route.path} exact={route.exact} key={index}>
              {route.component}
            </PrivateRoute>
          );
        }

        return (
          <Route path={route.path} exact={route.exact} key={index}>
            {route.component}
          </Route>
        );
      })}
    </Switch>
  );
};

export default Routes;
