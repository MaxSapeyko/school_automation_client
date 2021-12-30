import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { appState } from '../../../context/AppState';

import { USER_IMAGE_MOCK } from '../../../utils/common';

import useStyles from './style';

const Header: FC = () => {
  const classes = useStyles();
  console.log(appState);

  const getParsedName = () => {
    return `${
      appState?.currentUser?.name
    } ${appState?.currentUser?.surname.slice(
      0,
      1
    )}. ${appState?.currentUser?.lastname.slice(0, 1)}.`;
  };

  return (
    <header className={classes.root}>
      <Link to='/'>
        <img className='user__photo' src={USER_IMAGE_MOCK} alt='User avatar' />
        <span className='user__name'>{getParsedName()}</span>
      </Link>
    </header>
  );
};

export default Header;
