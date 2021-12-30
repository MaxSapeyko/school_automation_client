import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './privateRoute';

import Login from '../pages/login';

import { ROUTES } from './routes';

const Routes: FC = () => {
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
