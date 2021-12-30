import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Table from '../../components/table';
import COLUMNS from './columns';

import { subjectService } from '../../services/subjectService';
import { SubjectDto } from '../../typings/subject';

const Subjects: FC = () => {
  const history = useHistory();

  const [subjects, setSubjects] = useState<SubjectDto[]>([]);

  const redirectToAdd = () => {
    history.push('/subjects/create');
  };

  const getSubjects = async () => {
    const subjects = await subjectService.getAll();

    setSubjects(subjects);
  };

  const deleteSubject = async (id: string) => {
    await subjectService.deleteSubjectById(id);
    const filteredTeachers = subjects.filter((teacher) => teacher.id !== id);

    setSubjects(filteredTeachers);
  };

  useEffect(() => {
    getSubjects();
  }, []);

  return (
    <div>
      <Table
        data={subjects}
        columns={COLUMNS(deleteSubject)}
        title='Список предметів'
        buttonText='Додати предмет'
        buttonFunc={redirectToAdd}
      />
    </div>
  );
};

export default Subjects;
