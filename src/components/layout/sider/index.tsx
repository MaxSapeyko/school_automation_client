import { Menu } from 'antd';
import React, { FC } from 'react';
import { useHistory } from 'react-router';

import Logo from '../../icons/Logo';
import LogOut from '../../icons/LogOut';
import Magazine from '../../icons/Magazine';
import News from '../../icons/News';
import Subjects from '../../icons/Subjects';
import Pupils from '../../icons/Pupils';
import Reporting from '../../icons/Reporting';
import Shedule from '../../icons/Shedule';
import Teachers from '../../icons/Teachers';
import User from '../../icons/User';

import useStyles from './style';
import { Link } from 'react-router-dom';
import { authService } from '../../../services/authService';

const Sider: FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const path = `/${history.location.pathname.split('/')[1]}`;

  const logOut = () => {
    authService.logout();
    history.push('/login');
  };

  return (
    <aside className={classes.root}>
      <Logo className='logo__icon' />

      <Menu className={classes.menu} selectedKeys={[path]} mode='inline'>
        <Menu.Item key='/' icon={<User />}>
          <Link to='/'>Особистий кабінет</Link>
        </Menu.Item>
        <Menu.Item key='/teachers' icon={<Teachers />}>
          <Link to='/teachers'>Працівники закладу</Link>
        </Menu.Item>
        <Menu.Item key='/pupils' icon={<Pupils />}>
          <Link to='/pupils'>Учні</Link>
        </Menu.Item>
        <Menu.Item key='/subjects' icon={<Subjects />}>
          <Link to='/subjects'>Список предметів</Link>
        </Menu.Item>
        <Menu.Item key='/shedule' icon={<Shedule />}>
          <Link to='/shedule'>Розклад занять</Link>
        </Menu.Item>
        <Menu.Item key='/magazine' icon={<Magazine />}>
          <Link to='/magazine'>Електронний журнал</Link>
        </Menu.Item>
        <Menu.Item key='/news' icon={<News />}>
          <Link to='/news'>Новини</Link>
        </Menu.Item>
        <Menu.Item key='/reporting' icon={<Reporting />}>
          <Link to='/reporting'>Звітність навчання</Link>
        </Menu.Item>
        <Menu.Item
          key='/logout'
          icon={<LogOut />}
          className='logout__btn'
          onClick={logOut}
        >
          Вийти
        </Menu.Item>
      </Menu>
    </aside>
  );
};

export default Sider;
