import React, { FC } from 'react';

import Header from './header';

import useStyles from './style';

const Teachers: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />


    </div>
  );
};

export default Teachers;
