import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authService } from '../../services/authService';

const PrivateRoute: FC<Pick<IRoute, 'exact' | 'path'>> = ({
  children,
  path,
  exact,
}) => {
  if (authService.isLoggedIn()) {
    return (
      <Route path={path} exact={exact}>
        {children}
      </Route>
    );
  }

  return <Redirect to='/login' />;
};

export default PrivateRoute;
