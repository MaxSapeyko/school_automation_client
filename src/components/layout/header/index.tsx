import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import useStyles from './style';

const Header: FC = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <Link to='/'>
        <img
          className='user__photo'
          src='assets/img/user_photo.jpg'
          alt='User avatar'
        />
        <span className='user__name'>Самойленко В. В.</span>
      </Link>
    </header>
  );
};

export default Header;
