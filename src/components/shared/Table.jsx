import React from "react";
import { Table as AntTable } from "antd";

const SharedTable = ({ dataSource, columns, rowKey = "id", ...props }) => {
  return <AntTable dataSource={dataSource} columns={columns} rowKey={rowKey} {...props} />;
};

export default SharedTable;
