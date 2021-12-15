import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button, Select, Switch } from 'antd';
import classNames from 'classnames';

import { ProfileProps } from '..';

import LeftArrow from '../../../components/icons/LeftArrow';
import Plus from '../../../components/icons/Plus';

const { Option } = Select;

const Header: FC<Pick<ProfileProps, 'type'>> = ({ type }) => {
  if (type === 'own') {
    return (
      <div className='content__header'>
        <span className='content__title'>Особистий кабінет</span>

        <Select defaultValue='admin' className='header__select'>
          <Option value='admin'>Директор</Option>
          <Option value='student'>Учень</Option>
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

        <Select placeholder='Оберіть клас' className='header__select'>
          <Option value='3'>3</Option>
          <Option value='4'>4</Option>
        </Select>
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

        <Select defaultValue='admin' className='header__select'>
          <Option value='admin'>Директор</Option>
          <Option value='student'>Учень</Option>
        </Select>

        <Button
          disabled
          className={classNames('header__btn', { disabled: true })}
          icon={<Plus />}
          type='primary'
        >
          Додати
        </Button>
      </div>
    </div>
  );
};

export default Header;
