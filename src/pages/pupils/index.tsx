import React, { FC } from 'react';

import Table from '../../components/table';

import { USERS_MOCK } from '../../MOCK/user';
import COLUMNS from './columns';

import useStyles from './style';

const Pupils: FC = () => {
  const classes = useStyles();

  const addPupil = () => {
    // TODO add API
  };

  return (
    <div className={classes.root}>
      <Table
        data={USERS_MOCK}
        columns={COLUMNS}
        title='Учні'
        buttonText='Додати учня'
        buttonFunc={addPupil}
      />
    </div>
  );
};

export default Pupils;
