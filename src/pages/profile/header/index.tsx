import React, { FC } from 'react';
import { Select } from 'antd';

const { Option } = Select;

const Header: FC = () => {
  return (
    <div className='content__header'>
      <span className='content__title'>Особистий кабінет</span>

      <Select defaultValue='admin' className='header__select'>
        <Option value='admin'>Директор</Option>
        <Option value='student'>Учень</Option>
      </Select>
    </div>
  );
};

export default Header;
