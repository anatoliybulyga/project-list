import React from "react";
import { Table, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProjectList = () => {
  const navigate = useNavigate();
  const projects = useSelector((state) => state.projects);

  const columns = [
    {
      title: "Project ID",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Project Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate"
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate"
    },
    {
      title: "Project Manager",
      dataIndex: "manager",
      key: "manager"
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => <Button onClick={() => navigate(`/edit/${record.id}`)}>Edit</Button>
    }
  ];

  return <Table columns={columns} dataSource={projects} rowKey="id" />;
};

export default ProjectList;
