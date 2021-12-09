import React, { FC } from 'react';

import Content from './content';
import Header from './header';
import Sider from './sider';

import useStyles from './style';

const Layout: FC = ({ children }) => {
  const classes = useStyles();
  console.log(children);

  return (
    <section className={classes.root}>
      <Sider />
      <section className='main'>
        <Header />
        <Content>{children}</Content>
      </section>
    </section>
  );
};

export default Layout;
