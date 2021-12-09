import React, { FC } from 'react';

import useStyles from './style';

const Content: FC = ({ children }) => {
  const classes = useStyles();

  return <main className={classes.root}>{children}</main>;
};

export default Content;
