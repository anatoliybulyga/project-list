import React from "react";
import { Table as AntTable } from "antd";

const SharedTable = ({ dataSource, columns, rowKey = "id" }) => {
  return <AntTable dataSource={dataSource} columns={columns} rowKey={rowKey} />;
};

export default SharedTable;
