import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "project_a",
    name: "Project A",
    startDate: "2025-01-01",
    endDate: "2025-12-31",
    manager: "John Doe",
    isFavorite: true
  },
  {
    id: "project_b",
    name: "Project B",
    startDate: "2025-01-01",
    endDate: "2025-12-31",
    manager: "John Doe",
    isFavorite: true
  },
  {
    id: "project_c",
    name: "Project C",
    startDate: "2025-01-01",
    endDate: "2025-12-31",
    manager: "John Doe"
  },
  {
    id: "project_e",
    name: "Project E",
    startDate: "2025-01-01",
    endDate: "2025-12-31",
    manager: "John Doe"
  },
  {
    id: "project_F",
    name: "Project F",
    startDate: "2025-01-01",
    endDate: "2025-12-31",
    manager: "John Doe"
  },
  {
    id: "project_g",
    name: "Project G",
    startDate: "2025-01-01",
    endDate: "2025-12-31",
    manager: "John Doe"
  }
];

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    updateProject: (state, action) => {
      const { id, name, description, startDate, endDate, manager } = action.payload;
      const project = state.find((project) => project.id === id);
      if (project) {
        project.name = name;
        project.description = description;
        project.startDate = startDate;
        project.endDate = endDate;
        project.manager = manager;
      } else {
        console.warn(`Project with id ${id} not found.`);
      }
    }
  }
});

export const { updateProject } = projectSlice.actions;
export default projectSlice.reducer;
