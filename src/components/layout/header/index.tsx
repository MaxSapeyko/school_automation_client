import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { appState } from '../../../context/AppState';

import { USER_IMAGE_MOCK } from '../../../utils/common';

import useStyles from './style';

const Header: FC = () => {
  const classes = useStyles();

  const [parsedName, setParsedName] = useState('');

  const getParsedName = () => {
    return `${
      appState?.currentUser?.name
    } ${appState?.currentUser?.surname.slice(
      0,
      1
    )}. ${appState?.currentUser?.lastname.slice(0, 1)}.`;
  };

  useEffect(() => {
    if (appState.currentUser) {
      setParsedName(getParsedName());
    }
    // eslint-disable-next-line
  }, [appState.currentUser]);

  return (
    <header className={classes.root}>
      <Link to='/'>
        <img className='user__photo' src={USER_IMAGE_MOCK} alt='User avatar' />
        <span className='user__name'>{parsedName}</span>
      </Link>
    </header>
  );
};

export default Header;
