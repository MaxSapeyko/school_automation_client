import React, { FC } from 'react';
import { Table } from 'antd';
import COLUMNS from './columns';
import { DAYS } from '../../../utils/common';
import { GradeDto } from '../../../typings/magazine';
import { ColumnsType } from 'antd/lib/table';
import useStyles from './style';

interface MagazineTableProps {
  data: GradeDto[];
}

const MagazineTable: FC<MagazineTableProps> = ({ data }) => {
  const classes = useStyles();
  const func = () => {};

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month, 0).getDate();
  };

  const getWeekDay = (date: Date) => {
    return DAYS[date.getDay()];
  };

  const generateMagazine = (): ColumnsType<GradeDto> => {
    const month = 10;
    const year = 2021;
    const daysInMonth = getDaysInMonth(month, year);
    const daysInMonthArray = new Array(daysInMonth);

    const daysColumns: ColumnsType<GradeDto> = daysInMonthArray
      .fill(0)
      .map((_: number, index: number) => {
        const currentDate = new Date(year, month, index + 1);
        const dayName = getWeekDay(currentDate);

        return {
          title: (
            <div className='day-column__block'>
              <div>{dayName}</div>
              <div>{index + 1}</div>
            </div>
          ),
          dataIndex: 'grade',
          width: 50,
          render: (_1: any, _2: any, index: number) => {
            return <div>{index + 1}</div>;
          },
        };
      });

    const columns = [...COLUMNS(func), ...daysColumns];

    return columns;
  };

  return (
    <div className={classes.root}>
      <Table
        columns={generateMagazine()}
        dataSource={data}
        scroll={{ x: 1500, y: 700 }}
      />
    </div>
  );
};

export default MagazineTable;
