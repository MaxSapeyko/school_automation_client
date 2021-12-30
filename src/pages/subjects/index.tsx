import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Table from '../../components/table';
import COLUMNS from './columns';

import { UserDto } from '../../typings/user';

import { SUBJECTS } from '../../MOCK/subject';
import { userService } from '../../services/userService';
import { Role } from '../../utils/enums';

const Subjects: FC = () => {
  const history = useHistory();

  const [subjects, setSubjects] = useState<UserDto[]>([]);

  const redirectToAdd = () => {
    history.push('/subjects/create');
  };

  const getSubjects = async () => {
    const users = await userService.allUsers();
    const pupils = users.filter((user) => user.role === Role.Administator);

    setSubjects(pupils);
  };

  const deleteSubject = async (id: string) => {
    await userService.deleteUserById(id);
    const filteredTeachers = subjects.filter((teacher) => teacher.id !== id);

    setSubjects(filteredTeachers);
  };

  useEffect(() => {
    getSubjects();
  }, []);

  return (
    <div>
      <Table
        data={SUBJECTS}
        columns={COLUMNS(deleteSubject)}
        title='Список предметів'
        buttonText='Додати предмет'
        buttonFunc={redirectToAdd}
      />
    </div>
  );
};

export default Subjects;
