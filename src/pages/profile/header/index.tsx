import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button, Select, Switch } from 'antd';
import classNames from 'classnames';

import { ProfileProps } from '..';

import LeftArrow from '../../../components/icons/LeftArrow';
import Plus from '../../../components/icons/Plus';
import { UserDto } from '../../../typings/user';
import { Role } from '../../../utils/enums';

interface HeaderProps {
  user: UserDto | null;
  isCreate: boolean;
}

const { Option } = Select;

const Header: FC<Pick<ProfileProps, 'type'> & HeaderProps> = ({
  type,
  user,
  isCreate,
}) => {
  if (type === 'own') {
    return (
      <div className='content__header'>
        <span className='content__title'>Особистий кабінет</span>

        <Select
          disabled={!isCreate}
          value={user?.role}
          className='header__select'
        >
          <Option value={Role.Administator}>Адміністрація</Option>
          <Option value={Role.Student}>Учень</Option>
          <Option value={Role.Teacher}>Вчитель</Option>
        </Select>
      </div>
    );
  }

  if (type === 'pupil') {
    return (
      <div className='content__header'>
        <Link to='/pupils' className='back__link'>
          <LeftArrow />
          <span className='link__text'>Список учнів</span>
        </Link>

        <div className='header__inner'>
          <Select
            disabled={!isCreate}
            placeholder='Оберіть клас'
            defaultValue={user?.role}
            className='header__select'
          >
            <Option value='3'>3</Option>
            <Option value='4'>4</Option>
          </Select>

          <Button
            disabled={!isCreate}
            className={classNames('header__btn', { disabled: !isCreate })}
            icon={<Plus />}
            htmlType='submit'
            type='primary'
          >
            Додати
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className='content__header'>
      <Link to='/teachers' className='back__link'>
        <LeftArrow />
        <span className='link__text'>Список працівників</span>
      </Link>

      <div className='header__actions'>
        <div className='switch__block'>
          <Switch checked={false} />
          <span>Класний керівник</span>
        </div>

        <Select value={user?.role} className='header__select'>
          <Option value={Role.Administator}>Адміністрація</Option>
          <Option value={Role.Student}>Учень</Option>
          <Option value={Role.Teacher}>Вчитель</Option>
        </Select>

        <Button
          disabled={!isCreate}
          className={classNames('header__btn', { disabled: !isCreate })}
          icon={<Plus />}
          type='primary'
          htmlType='submit'
        >
          Додати
        </Button>
      </div>
    </div>
  );
};

export default Header;
