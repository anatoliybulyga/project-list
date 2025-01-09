import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const addProject = async (newProject) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/projects`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProject)
      });

      if (!response.ok) {
        throw new Error("Failed to add project");
      }

      const createdProject = await response.json();
      setProjects((prev) => [...prev, createdProject]);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const fetchProjects = async () => {
    setStatus("loading");
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/projects`);
      setProjects(response.data);
      setStatus("succeeded");
    } catch (err) {
      setError(err.message);
      setStatus("failed");
    }
  };

  const updateProject = async (updatedProject) => {
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/projects/${updatedProject.id}`, updatedProject);
      setProjects((prevProjects) =>
        prevProjects.map((project) => (project.id === updatedProject.id ? updatedProject : project))
      );
    } catch (err) {
      console.error("Failed to update project:", err);
      throw err;
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        status,
        error,
        setStatus,
        fetchProjects,
        addProject,
        updateProject
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectsContext);
