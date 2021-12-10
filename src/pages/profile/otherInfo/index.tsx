import React, { FC } from 'react';
import { Col } from 'antd';

import useStyles from './style';

const OtherInfo: FC = () => {
  const classes = useStyles();

  return (
    <Col className={classes.root}>
      <h4 className='data-module__title'>Інша інформація</h4>
      
    </Col>
  );
};

export default OtherInfo;
