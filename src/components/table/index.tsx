import React, { FC } from 'react';
import { Table as AntTable } from 'antd';
import Header, { HeaderProps } from './header';

interface TableProps {
  columns: any;
  data: any;
}

const Table: FC<TableProps & HeaderProps> = ({
  columns,
  data,
  title,
  buttonFunc,
  buttonText,
}) => {
  return (
    <div>
      <Header title={title} buttonFunc={buttonFunc} buttonText={buttonText} />

      <AntTable
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize: 8,
          position: ['bottomRight'],
          showSizeChanger: false,
        }}
      />
    </div>
  );
};

export default Table;
