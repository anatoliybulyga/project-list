import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./slices/projectSlice";

const store = configureStore({
  reducer: {
    projects: projectReducer
  }
});

store.subscribe(() => {
  // Save the Redux state to localStorage, sessionStorage, or reset on reload.
  if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
    store.dispatch({ type: "RESET_STATE" });
  }
});

export default store;
