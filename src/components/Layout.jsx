import React from "react";
import { Layout as AntdLayout } from "antd";
import Sidebar from "./Sidebar";

const { Sider, Content } = AntdLayout;

const Layout = ({ children }) => (
  <AntdLayout style={{ minHeight: "100vh" }}>
    <Sider>
      <Sidebar />
    </Sider>
    <AntdLayout>
      <Content style={{ padding: "24px", background: "#fff" }}>{children}</Content>
    </AntdLayout>
  </AntdLayout>
);

export default Layout;
