import React, { FC } from 'react';
import { Table as AntTable } from 'antd';

import COLUMNS from './columns';

import { USERS_MOCK } from '../../../MOCK/user';

const Table: FC = () => {
  return (
    <AntTable
      columns={COLUMNS}
      dataSource={USERS_MOCK}
      pagination={{
        pageSize: 8,
        position: ['bottomRight'],
        showSizeChanger: false,
      }}
    />
  );
};

export default Table;
