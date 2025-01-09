import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { fetchProjectById } from '../path/to/your/actions'; // Adjust the import based on your project structure

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const project = useSelector((state) => state.projects.find((project) => project.id === id));
  const [projectData, setProjectData] = useState(project);

  //   useEffect(() => {
  //     if (!project) {
  //       dispatch(fetchProjectById(id));
  //     }
  //   }, [id, project, dispatch]);

  useEffect(() => {
    if (project) {
      setProjectData(project);
    }
  }, [project]);

  if (!projectData) {
    return <div className="text-center mt-10 text-red-500">Project not found</div>;
  }

  const handleBack = () => {
    navigate("/");
  };

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 text-lg">
      <div className="mb-4 flex justify-between">
        <strong className="font-medium text-right w-1/3 mr-6">Project ID</strong>
        <span className="w-2/3 text-left">{projectData.id}</span>
      </div>
      <div className="mb-4 flex justify-between">
        <strong className="font-medium text-right w-1/3 mr-6">Project Name</strong>
        <span className="w-2/3 text-left">{projectData.name}</span>
      </div>
      <div className="mb-4 flex justify-between">
        <strong className="font-medium text-right w-1/3 mr-6">Description</strong>
        <span className="w-2/3 text-left">{projectData.description}</span>
      </div>
      <div className="mb-4 flex justify-between">
        <strong className="font-medium text-right w-1/3 mr-6">Start Date</strong>
        <span className="w-2/3 text-left">{projectData.startDate}</span>
      </div>
      <div className="mb-4 flex justify-between">
        <strong className="font-medium text-right w-1/3 mr-6">End Date</strong>
        <span className="w-2/3 text-left">{projectData.endDate}</span>
      </div>
      <div className="mb-10 flex justify-between">
        <strong className="font-medium text-right w-1/3 mr-6">Project Manager</strong>
        <span className="w-2/3 text-left">{projectData.manager}</span>
      </div>
      <button onClick={handleBack} className="mr-2 ml-10 px-10 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Back
      </button>
      <button onClick={handleEdit} className="px-10 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Edit
      </button>
    </div>
  );
};

export default ProjectDetails;
