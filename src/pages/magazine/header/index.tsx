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
}

const Header: FC<HeaderProps> = ({ changeMagazineDates }) => {
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
        <Select placeholder='Оберіть клас' className='header__select'>
          {subjects.map((item) => (
            <Option key={item.id} value={item.id}>
              {item.title}
            </Option>
          ))}
        </Select>

        <Select placeholder='Оберіть предмет' className='header__select'>
          {subjects.map((item) => (
            <Option key={item.id} value={item.id}>
              {item.title}
            </Option>
          ))}
        </Select>
        <div>
          <span className='teacher__title'>Вчитель: </span>
          <Link to='teachers/ID'>teacher</Link>
        </div>
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
