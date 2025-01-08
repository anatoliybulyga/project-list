import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SharedTable from "../components/shared/Table";
import SharedButton from "../components/shared/Button";

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
      render: (_, record) => <SharedButton onClick={() => navigate(`/edit/${record.id}`)}>Edit</SharedButton>
    }
  ];

  return <SharedTable columns={columns} dataSource={projects} rowKey="id" />;
};

export default ProjectList;
