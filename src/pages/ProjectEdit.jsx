import React, { useEffect, useState } from "react";
import { message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import ProjectForm from "../components/ProjectForm";
import { useProjects } from "../context/ProjectsContext";

const ProjectEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projects, updateProject, fetchProjects } = useProjects();

  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (projects.length > 0) {
      const currentProject = projects.find((p) => p.id === id);
      if (currentProject) {
        setProject(currentProject);
      } else {
        message.error("Project not found!");
        navigate("/projects");
      }
    }
  }, [id, projects, navigate]);

  const handleEdit = async (values) => {
    try {
      setLoading(true);
      const updatedProject = {
        ...project,
        ...values
      };
      await updateProject(updatedProject);

      message.success("Project updated successfully!");
      fetchProjects();
      navigate("/projects");
    } catch (error) {
      console.error(error);
      message.error("Failed to update project. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading || !project) {
    return <div>Loading...</div>;
  }

  return <ProjectForm initialValues={project} onSubmit={handleEdit} isEditing={true} loading={loading} />;
};

export default ProjectEdit;
