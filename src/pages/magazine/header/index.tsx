import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { DatePicker, Select } from 'antd';
import useStyles from './style';

const { Option } = Select;

const Header: FC = () => {
  const classes = useStyles();

  function onChange(date: any, dateString: string) {
    console.log(date, dateString);
  }

  return (
    <div className={classes.root}>
      <div className='col'>
        <Select placeholder='Оберіть клас' className='header__select'>
          <Option value='1'>1</Option>
          <Option value='2'>2</Option>
        </Select>
        <Select placeholder='Оберіть предмет' className='header__select'>
          <Option value='1'>1</Option>
          <Option value='2'>2</Option>
        </Select>
        <div>
          <span className='teacher__title'>Вчитель: </span>
          <Link to='teachers/ID'>teacher</Link>
        </div>
      </div>
      <div className='col'>
        <DatePicker
          className='header__select'
          placeholder='Оберіть місяць'
          onChange={onChange}
          picker='month'
        />
      </div>
    </div>
  );
};

export default Header;
