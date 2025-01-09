import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { useProjects } from "../context/ProjectsContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const { projects } = useProjects();

  const favoriteProjects = projects.filter((project) => project.isFavorite);

  const handleClick = (e) => {
    navigate(`/projects/${e.key}`);
  };

  const items = [
    { key: "favorite-projects", label: "Favorite Projects", type: "group" },
    ...favoriteProjects.map((project) => ({
      key: project.id,
      label: project.name
    }))
  ];

  return <Menu className="mt-8" theme="dark" mode="inline" items={items} onClick={handleClick} />;
};

export default Sidebar;
