import Profile from '../pages/profile';

export const ROUTES: IRoute[] = [
  {
    path: '/',
    private: true,
    exact: true,
    component: Profile,
  },
];
