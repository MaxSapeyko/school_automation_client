import Magazine from '../pages/magazine';
import News from '../pages/news';
import Profile from '../pages/profile';
import Pupils from '../pages/pupils';
import Reporting from '../pages/reporting';
import Shedule from '../pages/shedule';
import Subject from '../pages/subject';
import Subjects from '../pages/subjects';
import Teachers from '../pages/teachers';

export const ROUTES: IRoute[] = [
  {
    path: '/',
    private: true,
    exact: true,
    component: <Profile type='own' isCreate={false} />,
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
    path: '/pupils/create',
    private: true,
    exact: true,
    component: <Profile type='pupil' isCreate={true} />,
  },
  {
    path: '/pupils/:id',
    private: true,
    exact: true,
    component: <Profile type='pupil' isCreate={false} />,
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
    path: '/teachers/create',
    private: true,
    exact: true,
    component: <Profile type='teacher' isCreate={true} />,
  },
  {
    path: '/teachers/:id',
    private: true,
    exact: true,
    component: <Profile type='teacher' isCreate={false} />,
  },
  {
    path: '/subjects',
    private: true,
    exact: true,
    component: <Subjects />,
  },
  {
    path: '/subjects/:id',
    private: true,
    exact: true,
    component: <Subject />,
  },
];
