import Magazine from '../pages/magazine';
import News from '../pages/news';
import Profile from '../pages/profile';
import Pupils from '../pages/pupils';
import Reporting from '../pages/reporting';
import Shedule from '../pages/shedule';
import Subjects from '../pages/subjects';
import Teachers from '../pages/teachers';

export const ROUTES: IRoute[] = [
  {
    path: '/',
    private: true,
    exact: true,
    component: <Profile />,
  },
  {
    path: '/magazine',
    private: true,
    exact: true,
    component: <Magazine />,
  },
  {
    path: '/news',
    private: true,
    exact: true,
    component: <News />,
  },
  {
    path: '/pupils',
    private: true,
    exact: true,
    component: <Pupils />,
  },
  {
    path: '/reporting',
    private: true,
    exact: true,
    component: <Reporting />,
  },
  {
    path: '/shedule',
    private: true,
    exact: true,
    component: <Shedule />,
  },
  {
    path: '/teachers',
    private: true,
    exact: true,
    component: <Teachers />,
  },
  {
    path: '/subjects',
    private: true,
    exact: true,
    component: <Subjects />,
  },
];
