import React, { FC } from 'react';

import Table from '../../components/table';

import { USERS_MOCK } from '../../MOCK/user';
import COLUMNS from './columns';

import useStyles from './style';

const Teachers: FC = () => {
  const classes = useStyles();

  const addTeacher = () => {
    // TODO add API
  };

  return (
    <div className={classes.root}>
      <Table
        data={USERS_MOCK}
        columns={COLUMNS}
        title='Працівники закладу'
        buttonText='Додати працівника'
        buttonFunc={addTeacher}
        />
    </div>
  );
};

export default Teachers;
