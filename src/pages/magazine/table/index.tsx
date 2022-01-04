import React, { FC, useState } from 'react';
import { Button, Modal, Select, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import Form from 'antd/lib/form/Form';

import COLUMNS from './columns';
import { gradeService } from '../../../services/gradeService';
import { DAYS } from '../../../utils/common';
import { CreateGradeDto, MagazineDateModel } from '../../../typings/magazine';
import { UserDto } from '../../../typings/user';

import useStyles from './style';
import { SubjectDto } from '../../../typings/subject';
import classNames from 'classnames';

interface MagazineTableProps {
  data: UserDto[];
  magazineSubject: SubjectDto | null;
  magazineDate: MagazineDateModel;
}

const { Option } = Select;

const MagazineTable: FC<MagazineTableProps> = ({
  data,
  magazineDate,
  magazineSubject,
}) => {
  const classes = useStyles();

  const [isVisible, setIsVisible] = useState(false);
  const [selectedCell, setSelectedCell] = useState<UserDto | null>(null);

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month, 0).getDate();
  };

  const getWeekDay = (date: Date) => {
    return DAYS[date.getDay()];
  };

  const submitGrade = async () => {
    try {
      const body: CreateGradeDto = {
        grade: 0,
        date: new Date(),
        userId: selectedCell!.id,
        subjectId: magazineSubject!.id,
      };

      const grade = await gradeService.createGrade(body);
      console.log(grade);
    } catch (error) {}
  };

  const generateMagazine = (): ColumnsType<UserDto> => {
    const selectedDate = new Date(magazineDate.dateString);
    const month = selectedDate.getMonth();
    const year = selectedDate.getFullYear();
    const daysInMonth = getDaysInMonth(month, year);
    const daysInMonthArray = new Array(daysInMonth);

    const daysColumns: ColumnsType<UserDto> = daysInMonthArray
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
          className: classNames('grade', {
            holiday: dayName === 'вс',
          }),
          dataIndex: 'grade',
          width: 50,
          onCell: (record, index) => {
            return {
              onClick: () => {
                if (dayName !== 'вс') {
                  setSelectedCell(record);
                  setIsVisible(true);
                }
              },
            };
          },
          render: (_1: any, user: UserDto, index: number) => {
            return (
              <div
                className={classNames({
                  'no-grade': !user?.grade?.grade,
                  'bad-grade':
                    user?.grade &&
                    user?.grade?.grade <= 3 &&
                    user?.grade?.grade > 0,
                  'good-grade': user?.grade && user?.grade?.grade >= 10,
                  miss: user?.grade && user?.grade?.grade === 0,
                })}
              >
                {user?.grade
                  ? user.grade.grade > 0
                    ? user.grade.grade
                    : 'Н'
                  : '0'}
              </div>
            );
          },
        };
      });

    const columns = [...COLUMNS(() => {}), ...daysColumns];

    return columns;
  };

  return (
    <div className={classes.root}>
      <Table
        bordered
        columns={generateMagazine()}
        dataSource={data}
        scroll={{ x: 1500, y: 700 }}
        rowKey={(record) => record.id}
      />

      <Modal
        title='Поставте оцінку'
        visible={isVisible}
        okText={false}
        cancelText={false}
        footer={false}
        centered
        onCancel={() => setIsVisible(false)}
      >
        <Form onFinish={submitGrade}>
          <Select defaultValue={0}>
            {new Array(13).fill(0).map((item, index) => (
              <Option key={index} value={index}>
                {index === 0 ? 'Н' : index}
              </Option>
            ))}
          </Select>

          <Button htmlType='submit' type='primary'>
            Поставити
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default MagazineTable;
