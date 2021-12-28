import React, { FC } from 'react';

import Table from '../../components/table';
import COLUMNS from './columns';

import { SUBJECTS } from '../../MOCK/subject';

const Subjects: FC = () => {
  const redirectToAdd = () => {
    // TODO connect API
  };

  return (
    <div>
      <Table
        data={SUBJECTS}
        columns={COLUMNS}
        title='Список предметів'
        buttonText='Додати предмет'
        buttonFunc={redirectToAdd}
      />
    </div>
  );
};

export default Subjects;
