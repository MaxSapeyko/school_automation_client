import React, { FC, useEffect } from 'react';

import Table from '../../components/table';

import { USERS_MOCK } from '../../MOCK/user';
import { userService } from '../../services/userService';
import COLUMNS from './columns';

import useStyles from './style';

const Pupils: FC = () => {
  const classes = useStyles();

  const addPupil = () => {
    // TODO add API
  };

  const getPupils = async () => {
    const users = await userService.allUsers();
    const pupils = users.filter((user) => user.role === 'student');

    console.log('sdfsdf');
    console.log(users);
  };

  useEffect(() => {
    getPupils();
  }, []);

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
