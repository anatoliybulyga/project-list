import React from "react";
import { Menu } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const projects = useSelector((state) => state.projects);
  const favoriteProjects = projects.filter((project) => project.isFavorite);
  const navigate = useNavigate();

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
