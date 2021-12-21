import React, { FC, useEffect, useState } from 'react';

import Table from '../../components/table';

import { userService } from '../../services/userService';
import { UserDto } from '../../typings/user';
import { Role } from '../../utils/enums';

import COLUMNS from './columns';

import useStyles from './style';

const Pupils: FC = () => {
  const classes = useStyles();

  const [pupils, setPupils] = useState<UserDto[]>([]);
  const addPupil = () => {
    // TODO add API
  };

  const getPupils = async () => {
    const users = await userService.allUsers();
    const pupils = users.filter((user) => user.role === Role.Student);

    setPupils(pupils);
  };

  useEffect(() => {
    getPupils();
  }, []);

  return (
    <div className={classes.root}>
      <Table
        data={pupils}
        columns={COLUMNS}
        title='Учні'
        buttonText='Додати учня'
        buttonFunc={addPupil}
      />
    </div>
  );
};

export default Pupils;
