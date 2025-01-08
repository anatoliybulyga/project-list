import React from "react";
import { Button as AntButton } from "antd";

const SharedButton = ({ type = "primary", onClick, children, ...props }) => {
  return (
    <AntButton type={type} onClick={onClick} {...props}>
      {children}
    </AntButton>
  );
};

export default SharedButton;
