import React from "react";
import { useNavigate } from "react-router-dom";
import SharedTable from "../components/shared/Table";
import SharedButton from "../components/shared/Button";
import { useProjects } from "../context/ProjectsContext";
import markedFavoriteIcon from "../icons/favorite_1.png";
import favoriteIcon from "../icons/favorite.png";

const ProjectList = () => {
  const { projects, status, error, toggleFavorite } = useProjects();
  const navigate = useNavigate();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  if (status === "loading") return <p>Loading projects...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  const columns = [
    {
      title: "Project ID",
      dataIndex: "id",
      key: "id",
      align: "center"
    },
    {
      title: "Project Name",
      dataIndex: "name",
      key: "name",
      align: "center"
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
      align: "center"
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
      align: "center"
    },
    {
      title: "Project Manager",
      dataIndex: "manager",
      key: "manager",
      align: "center"
    },
    {
      title: "",
      key: "favorite",
      align: "center",
      width: "60px",
      render: (_, record) => (
        <img
          src={record.isFavorite ? markedFavoriteIcon : favoriteIcon}
          alt={record.isFavorite ? "Favorite" : "Not Favorite"}
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(record.id);
          }}
          style={{ cursor: "pointer", width: "24px", height: "24px" }}
        />
      )
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
        rowClassName="cursor-pointer"
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
