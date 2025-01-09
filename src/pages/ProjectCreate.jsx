import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import ProjectForm from "../components/ProjectForm";
import { useProjects } from "../context/ProjectsContext";

const initialProjectValues = {
  name: "",
  startDate: undefined,
  endDate: undefined,
  manager: "",
  description: ""
};

const ProjectCreate = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { addProject } = useProjects();

  const handleCreate = async (values) => {
    setLoading(true);
    try {
      const newProject = {
        ...values
      };

      await addProject(newProject);
      message.success("Project created successfully!");

      navigate("/projects");
    } catch (error) {
      console.error(error);
      message.error("Failed to create project. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProjectForm initialValues={initialProjectValues} onSubmit={handleCreate} isEditing={false} loading={loading} />
  );
};

export default ProjectCreate;
