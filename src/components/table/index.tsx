import React, { FC } from 'react';
import { Table as AntTable } from 'antd';
import Header, { HeaderProps } from './header';

interface TableProps {
  columns: any;
  data: any;
  buttonFunc: () => void;
}

const Table: FC<TableProps & HeaderProps> = ({
  columns,
  data,
  title,
  buttonText,
  buttonFunc,
}) => {
  return (
    <div>
      <Header title={title} buttonText={buttonText} buttonFunc={buttonFunc} />

      <AntTable
        rowKey={(record) => record.id}
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
