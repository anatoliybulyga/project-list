import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import ProjectList from "./pages/ProjectList";
import ProjectEdit from "./pages/ProjectEdit";
import ProjectCreate from "./pages/ProjectCreate";
import ProjectDetails from "./pages/ProjectDetails";
import { ProjectsProvider } from "./context/ProjectsContext";

const App = () => (
  <ProjectsProvider>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/projects" />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/projects/:id/edit/" element={<ProjectEdit />} />
          <Route path="/projects/new" element={<ProjectCreate />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="*" element={<div>404 - Not Found</div>} />
        </Routes>
      </Layout>
    </Router>
  </ProjectsProvider>
);

export default App;
