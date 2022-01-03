import React, { FC } from 'react';

import Header from './header';
import Table from './table';

const Magazine: FC = () => {
  return (
    <div>
      <Header />

      <Table data={[]} />
    </div>
  );
};

export default Magazine;
