import React, { FC } from 'react';
import { Button } from 'antd';

import Plus from '../../../components/icons/Plus';

const Header: FC = () => {
  const addTeacher = () => {}; // TODO connect API

  return (
    <div className='content__header'>
      <span className='content__title'>Працівники закладу</span>

      <Button
        className='header__btn'
        icon={<Plus />}
        type='primary'
        onClick={addTeacher}
      >
        Додати працівника
      </Button>
    </div>
  );
};

export default Header;
