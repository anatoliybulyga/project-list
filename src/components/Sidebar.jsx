import React from 'react';
import { Menu } from 'antd';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const projects = useSelector((state) => state.projects);
  const favoriteProjects = projects.filter((project) => project.isFavorite);

  const items = [
    { key: 'favorite-projects', label: 'Favorite Projects' },
    ...favoriteProjects.map((project) => ({
        key: project.id,
        label: project.name,
      })),
  ]


  return <Menu theme="dark" mode="inline" items={items} />;
};

export default Sidebar;
