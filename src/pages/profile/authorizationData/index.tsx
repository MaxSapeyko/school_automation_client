import React, { FC } from 'react';
import { Col } from 'antd';

import useStyles from './style';

const OtherInfo: FC = () => {
  const classes = useStyles();

  return (
    <Col span={8} className={classes.root}>
      <h4 className='data-module__title'>Авторизаційні дані</h4>
    </Col>
  );
};

export default OtherInfo;
