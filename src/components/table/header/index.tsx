import React, { FC } from 'react';
import { Button } from 'antd';

import Plus from '../../icons/Plus';

export interface HeaderProps {
  title: string;
  buttonText: string;
  buttonFunc: () => void;
}

const Header: FC<HeaderProps> = ({ title, buttonText, buttonFunc }) => {
  return (
    <div className='content__header'>
      <span className='content__title'>{title}</span>

      <Button
        className='header__btn'
        icon={<Plus />}
        type='primary'
        onClick={buttonFunc}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default Header;
