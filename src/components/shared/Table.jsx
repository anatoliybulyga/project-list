import React from "react";
import { Table as AntTable } from "antd";

const SharedTable = ({ dataSource, columns, rowKey = "id", ...props }) => {
  return (
    <AntTable scroll={{ x: "max-content" }} dataSource={dataSource} columns={columns} rowKey={rowKey} {...props} />
  );
};

export default SharedTable;
