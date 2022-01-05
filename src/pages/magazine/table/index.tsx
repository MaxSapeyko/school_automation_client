import React, { FC, useEffect, useState } from 'react';
import { Form, Button, Modal, Select, Table } from 'antd';
import { ColumnGroupType, ColumnsType, ColumnType } from 'antd/lib/table';

import COLUMNS from './columns';
import { gradeService } from '../../../services/gradeService';
import { DAYS } from '../../../utils/common';
import {
  CreateGradeDto,
  GradeDto,
  MagazineDateModel,
} from '../../../typings/magazine';
import { UserDto } from '../../../typings/user';

import useStyles from './style';
import { SubjectDto } from '../../../typings/subject';
import classNames from 'classnames';
import { compareTwoDateWithoutTime } from '../../../helpers';

interface MagazineTableProps {
  data: UserDto[];
  magazineSubject: SubjectDto | null;
  magazineDate: MagazineDateModel;
}

interface CellModel {
  date: Date;
  user: UserDto | null;
}

const { Option } = Select;

const MagazineTable: FC<MagazineTableProps> = ({
  data,
  magazineDate,
  magazineSubject,
}) => {
  const classes = useStyles();

  const [isVisible, setIsVisible] = useState(false);
  const [columns, setColumns] = useState<
    (ColumnGroupType<UserDto> | ColumnType<UserDto>)[]
  >([]);
  const [selectedCell, setSelectedCell] = useState<CellModel>({
    user: null,
    date: new Date(),
  });
  const [grades, setGrades] = useState<GradeDto[]>([]);

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month, 0).getDate();
  };

  const getWeekDay = (date: Date) => {
    return DAYS[date.getDay()];
  };

  const submitGrade = async (values: any) => {
    try {
      const body: CreateGradeDto = {
        grade: Number(values.grade),
        date: selectedCell.date,
        userId: selectedCell!.user!.id,
        subjectId: magazineSubject!.id,
      };

      const grade = await gradeService.createGrade(body);

      setGrades([...grades, grade]);
      setIsVisible(false);
    } catch (error) {}
  };

  const generateMagazine = (grades: GradeDto[]) => {
    const selectedDate = new Date(magazineDate.dateString);
    const month = selectedDate.getMonth();
    const year = selectedDate.getFullYear();
    const daysInMonth = getDaysInMonth(month, year);
    const daysInMonthArray = new Array(daysInMonth);

    const daysColumns: ColumnsType<UserDto> = daysInMonthArray
      .fill(0)
      .map((_: number, index: number) => {
        const currentDate = new Date(year, month, index + 1, 0, 0, 0, 0);
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
                  setSelectedCell({
                    user: record,
                    date: currentDate,
                  });
                  setIsVisible(true);
                }
              },
            };
          },
          render: (_1: any, user: UserDto) => {
            const userGrades = grades.filter(
              (grade) =>
                grade.userID === user.id &&
                grade.subject.id === magazineSubject?.id
            );

            const grade = userGrades.find((grade) =>
              compareTwoDateWithoutTime(new Date(grade.date), currentDate)
            );

            const cell = grade
              ? Number(grade.grade) > 0
                ? grade.grade
                : 'Н'
              : '0';

            return (
              <div
                onClick={(event) => {
                  if (cell !== '0') {
                    event.stopPropagation();
                  }
                }}
                className={classNames('cell__inner', {
                  'no-grade': typeof grade?.grade === 'undefined',
                  'bad-grade': grade && grade.grade <= 3 && grade.grade > 0,
                  'good-grade': grade?.grade && grade?.grade >= 10,
                  miss: grade?.grade && grade?.grade === 0,
                })}
              >
                {cell}
              </div>
            );
          },
        };
      });

    const columns = [...COLUMNS(() => {}), ...daysColumns];

    setColumns(columns);
  };

  const getGrades = async () => {
    const grades = await gradeService.allGrades();
    setGrades(grades);
    generateMagazine(grades);
  };

  useEffect(() => {
    if (!isVisible) {
      getGrades();
    }
    // eslint-disable-next-line
  }, [isVisible, magazineDate]);

  return (
    <div className={classes.root}>
      <Table
        bordered
        columns={columns}
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
        <Form initialValues={{ grade: 0 }} onFinish={submitGrade}>
          <Form.Item name={['grade']}>
            <Select>
              {new Array(13).fill(0).map((item, index) => (
                <Option key={index} value={index}>
                  {index === 0 ? 'Н' : index}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Button htmlType='submit' type='primary'>
            Поставити
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default MagazineTable;
