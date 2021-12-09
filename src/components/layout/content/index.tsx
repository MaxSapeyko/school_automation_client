import React, { FC } from 'react';
import { Layout } from 'antd';

const Content: FC = ({ children }) => {
  return <Layout.Content>{children}</Layout.Content>;
};

export default Content;
