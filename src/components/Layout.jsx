import React from "react";
import { Layout as AntdLayout } from "antd";
import Sidebar from "./Sidebar";

const { Sider, Content } = AntdLayout;

const Layout = ({ children }) => (
  <AntdLayout className="mt-0 min-h-screen">
    <Sider>
      <Sidebar />
    </Sider>
    <AntdLayout>
      <Content className="p-6 bg-white">{children}</Content>
    </AntdLayout>
  </AntdLayout>
);

export default Layout;
