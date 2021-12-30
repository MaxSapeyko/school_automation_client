import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Button } from 'antd';

import LeftArrow from '../../../components/icons/LeftArrow';
import Plus from '../../../components/icons/Plus';

const Header: FC = () => {
  return (
    <div className='content__header'>
      <Link to='/subjects' className='back__link'>
        <LeftArrow />
        <span className='link__text'>Список предметів</span>
      </Link>

      <div className='header__actions'>
        <Button
          disabled={false}
          className={classNames('header__btn', { disabled: false })}
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
