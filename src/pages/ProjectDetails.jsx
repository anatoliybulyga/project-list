import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProjects } from "../context/ProjectsContext";
import markedFavoriteIcon from "../icons/favorite_1.png";
import favoriteIcon from "../icons/favorite.png";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projects, toggleFavorite } = useProjects();
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    if (projects.length > 0) {
      const currentProject = projects.find((project) => project.id === id);
      setProjectData(currentProject);
    }
  }, [id, projects]);

  if (!projectData) {
    return <div className="text-center mt-10 text-red-500">Project not found</div>;
  }

  const handleBack = () => {
    navigate("/projects");
  };

  const handleEdit = () => {
    navigate(`/projects/${id}/edit`);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 text-lg relative">
      <img
        className="absolute top-4 right-4 cursor-pointer w-6 h-6"
        src={projectData.isFavorite ? markedFavoriteIcon : favoriteIcon}
        alt={projectData.isFavorite ? "Favorite" : "Not Favorite"}
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(projectData.id);
        }}
        style={{ cursor: "pointer", width: "24px", height: "24px" }}
      />
      <div className="mb-4 flex flex-col sm:flex-row justify-between">
        <strong className="font-medium text-right sm:w-1/3 mr-6">Project ID</strong>
        <span className="sm:w-2/3 text-left">{projectData.id}</span>
      </div>
      <div className="mb-4 flex flex-col sm:flex-row justify-between">
        <strong className="font-medium text-right sm:w-1/3 mr-6">Project Name</strong>
        <span className="sm:w-2/3 text-left">{projectData.name}</span>
      </div>
      <div className="mb-4 flex flex-col sm:flex-row justify-between">
        <strong className="font-medium text-right sm:w-1/3 mr-6">Description</strong>
        <span className="sm:w-2/3 text-left">{projectData.description}</span>
      </div>
      <div className="mb-4 flex flex-col sm:flex-row justify-between">
        <strong className="font-medium text-right sm:w-1/3 mr-6">Start Date</strong>
        <span className="sm:w-2/3 text-left">{projectData.startDate}</span>
      </div>
      <div className="mb-4 flex flex-col sm:flex-row justify-between">
        <strong className="font-medium text-right sm:w-1/3 mr-6">End Date</strong>
        <span className="sm:w-2/3 text-left">{projectData.endDate}</span>
      </div>
      <div className="mb-10 flex flex-col sm:flex-row justify-between">
        <strong className="font-medium text-right sm:w-1/3 mr-6">Project Manager</strong>
        <span className="sm:w-2/3 text-left">{projectData.manager}</span>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-start ml-12">
        <button
          onClick={handleBack}
          className="mb-2 sm:mb-0 sm:mr-2 px-8 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Back
        </button>
        <button onClick={handleEdit} className="px-8 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Edit
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
