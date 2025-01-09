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
      render: (_, record) => (
        <SharedButton
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/projects/${record.id}/edit`);
          }}
        >
          Edit
        </SharedButton>
      )
    }
  ];

  return (
    <div className="mt-2 p-4">
      <div className="text-right">
        <SharedButton className="mb-6" onClick={() => navigate(`/projects/new`)}>
          Create Project
        </SharedButton>
      </div>

      <SharedTable
        onRow={(record) => ({
          onClick: () => navigate(`/projects/${record.id}`)
        })}
        columns={columns}
        dataSource={projects}
        rowKey="id"
      />
    </div>
  );
};

export default ProjectList;
