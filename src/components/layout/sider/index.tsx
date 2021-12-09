import React, { FC } from 'react';

import useStyles from './style';

const Sider: FC = () => {
  const classes = useStyles();

  return <aside className={classes.root}>Sider</aside>;
};

export default Sider;
