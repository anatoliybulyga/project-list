import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./slices/projectSlice";

const store = configureStore({
  reducer: {
    projects: projectReducer
  }
});

export default store;
