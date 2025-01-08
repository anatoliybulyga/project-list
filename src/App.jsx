import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Layout from "./components/Layout";
import ProjectList from "./pages/ProjectList";
import ProjectEdit from "./pages/ProjectEdit";

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ProjectList />} />
          <Route path="/edit/:id" element={<ProjectEdit />} />
        </Routes>
      </Layout>
    </Router>
  </Provider>
);

export default App;
