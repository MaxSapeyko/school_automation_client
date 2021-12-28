import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Table from '../../components/table';

import { userService } from '../../services/userService';
import { UserDto } from '../../typings/user';
import { Role } from '../../utils/enums';

import COLUMNS from './columns';

import useStyles from './style';

const Teachers: FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const [teachers, setTeachers] = useState<UserDto[]>([]);

  const redirectToAdd = () => {
    history.push('/teachers/create');
  };

  const getTeachers = async () => {
    const users = await userService.allUsers();
    const pupils = users.filter((user) => user.role === Role.Administator);

    setTeachers(pupils);
  };

  useEffect(() => {
    getTeachers();
  }, []);

  return (
    <div className={classes.root}>
      <Table
        data={teachers}
        columns={COLUMNS}
        title='Працівники закладу'
        buttonText='Додати працівника'
        buttonFunc={redirectToAdd}
      />
    </div>
  );
};

export default Teachers;
