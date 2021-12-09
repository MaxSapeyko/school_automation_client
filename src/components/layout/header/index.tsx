import React, { FC } from 'react';

import useStyles from './style';

const Header: FC = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <a href='/'>
        <img
          className='user__photo'
          src='assets/img/user_photo.jpg'
          alt='User avatar'
        />
        <span className='user__name'>Самойленко В. В.</span>
      </a>
    </header>
  );
};

export default Header;
