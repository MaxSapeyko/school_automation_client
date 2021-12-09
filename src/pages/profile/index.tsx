import React, { FC } from 'react';

import useStyles from './style';

const Profile: FC = () => {
  const classes = useStyles();

  return <div className={classes.root}>Profile</div>;
};

export default Profile;
