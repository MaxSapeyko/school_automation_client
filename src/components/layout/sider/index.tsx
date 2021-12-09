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

const Sider: FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const path = `/${history.location.pathname.split('/')[1]}`;

  return (
    <aside className={classes.root}>
      <Logo className='logo__icon' />

      <Menu className={classes.menu} selectedKeys={[path]} mode='inline'>
        <Menu.Item key='/' icon={<User />}>
          Особистий кабінет
        </Menu.Item>
        <Menu.Item key='2' icon={<Teachers />}>
          Працівники закладу
        </Menu.Item>
        <Menu.Item key='3' icon={<Pupils />}>
          Учні
        </Menu.Item>
        <Menu.Item key='4' icon={<Subjects />}>
          Список предметів
        </Menu.Item>
        <Menu.Item key='5' icon={<Shedule />}>
          Розклад занять
        </Menu.Item>
        <Menu.Item key='6' icon={<Magazine />}>
          Електронний журнал
        </Menu.Item>
        <Menu.Item key='7' icon={<News />}>
          Новини
        </Menu.Item>
        <Menu.Item key='8' icon={<Reporting />}>
          Звітність навчання
        </Menu.Item>
        <Menu.Item key='9' icon={<LogOut />} className='logout__btn'>
          Вийти
        </Menu.Item>
      </Menu>
    </aside>
  );
};

export default Sider;
