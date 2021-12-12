import React, { FC } from 'react';

import Header from './header';
import Table from './table';

import useStyles from './style';

const Teachers: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />

      <Table />
    </div>
  );
};

export default Teachers;
