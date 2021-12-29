import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { USER_IMAGE_MOCK } from '../../../utils/common';

import useStyles from './style';

const Header: FC = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <Link to='/'>
        <img className='user__photo' src={USER_IMAGE_MOCK} alt='User avatar' />
        <span className='user__name'>Самойленко В. В.</span>
      </Link>
    </header>
  );
};

export default Header;
