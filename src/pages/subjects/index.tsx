import React, { FC } from 'react';

import Table from '../../components/table';
import COLUMNS from './columns';

import { SUBJECTS } from '../../MOCK/subject';

const Subjects: FC = () => {
  const addSubject = () => {
    // TODO connect API
  };

  return (
    <div>
      <Table
        data={SUBJECTS}
        columns={COLUMNS}
        title='Список предметів'
        buttonText='Додати предмет'
        buttonFunc={addSubject}
      />
    </div>
  );
};

export default Subjects;
