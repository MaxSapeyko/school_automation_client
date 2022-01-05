import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DatePicker, Select } from 'antd';
import moment from 'moment';

import useStyles from './style';
import { subjectService } from '../../../services/subjectService';
import { SubjectDto } from '../../../typings/subject';

const { Option } = Select;

interface HeaderProps {
  changeMagazineDates: (date: moment.Moment | null, dateString: string) => void;
  setMagazineSubject: React.Dispatch<React.SetStateAction<SubjectDto | null>>;
  magazineSubject: SubjectDto | null;
  setSelectedClass: React.Dispatch<React.SetStateAction<number>>;
}

const Header: FC<HeaderProps> = ({
  changeMagazineDates,
  setMagazineSubject,
  magazineSubject,
  setSelectedClass,
}) => {
  const classes = useStyles();

  const [subjects, setSubjects] = useState<SubjectDto[]>([]);

  const getSubjects = async () => {
    const subjects = await subjectService.getAll();

    setSubjects(subjects);
  };

  useEffect(() => {
    getSubjects();
  }, []);

  return (
    <div className={classes.root}>
      <div className='col'>
        <Select
          placeholder='Оберіть клас'
          className='header__select'
          onChange={(value) => {
            setSelectedClass(value ? Number(value) : 0);
          }}
        >
          {new Array(12).fill(0).map((item, index) => (
            <Option key={index} value={index + 1}>
              {index + 1}
            </Option>
          ))}
        </Select>

        <Select
          placeholder='Оберіть предмет'
          className='header__select'
          onChange={(value) => {
            setMagazineSubject(
              subjects.find((subject) => subject.id === value)!
            );
          }}
        >
          {subjects.map((item) => (
            <Option key={item.id} value={item.id}>
              {item.title}
            </Option>
          ))}
        </Select>
        {magazineSubject && (
          <div>
            <span className='teacher__title'>Вчитель: </span>
            <Link
              to={`teachers/${magazineSubject.users[0].id}`}
            >{`${magazineSubject.users[0].lastname} ${magazineSubject.users[0].name} ${magazineSubject.users[0].surname}`}</Link>
          </div>
        )}
      </div>
      <div className='col'>
        <DatePicker
          defaultValue={moment(new Date())}
          className='header__select'
          placeholder='Оберіть місяць'
          onChange={changeMagazineDates}
          picker='month'
        />
      </div>
    </div>
  );
};

export default Header;
