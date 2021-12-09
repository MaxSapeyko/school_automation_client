import React, { FC } from 'react';

import useStyles from './style';

const Header: FC = () => {
  const classes = useStyles();

  return <header className={classes.root}>Header</header>;
};

export default Header;
