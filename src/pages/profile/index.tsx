import React, { FC } from 'react';
import { Select } from 'antd';

import useStyles from './style';

const { Option } = Select;

const Profile: FC = () => {
  const classes = useStyles();

  return <div className={classes.root}>
    <div className='content__header'>
      <span className='content__title'>
        Особистий кабінет
      </span>

      <Select defaultValue='admin' className='header__select'>
        <Option value='admin'>Директор</Option>
        <Option value='student'>Учень</Option>
      </Select>
    </div>
  </div>;
};

export default Profile;
