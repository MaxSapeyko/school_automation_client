import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Select } from 'antd';

import { ProfileProps } from '..';

import LeftArrow from '../../../components/icons/LeftArrow';

const { Option } = Select;

const Header: FC<Pick<ProfileProps, 'type'>> = ({type}) => {
  if (type === 'own'){
  return (
    <div className='content__header'>
      <span className='content__title'>Особистий кабінет</span>

      <Select defaultValue='admin' className='header__select'>
        <Option value='admin'>Директор</Option>
        <Option value='student'>Учень</Option>
      </Select>
    </div>
  );}

  return (
    <div className='content__header'>
      <Link to='/teachers' className='back__link'>
        <LeftArrow />
        <span className='link__text'>Список працівників</span>
      </Link>

      <Select defaultValue='admin' className='header__select'>
        <Option value='admin'>Директор</Option>
        <Option value='student'>Учень</Option>
      </Select>
    </div>
  )
};

export default Header;
