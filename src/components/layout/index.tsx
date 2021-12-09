import React, { FC } from 'react';
import { Layout as AntdLayout } from 'antd';

import Content from './content';
import Header from './header';
import Sider from './sider';

import useStyles from './style';

const Layout: FC = () => {
  const classes = useStyles();

  return (
    <AntdLayout className={classes.root}>
      <Sider />
      <AntdLayout>
        <Header />
        <Content>Content</Content>
      </AntdLayout>
    </AntdLayout>
  );
};

export default Layout;
