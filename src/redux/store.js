import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // Default storage for web (localStorage)
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import projectReducer from "./slices/projectSlice";

const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
  projects: projectReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);
export default store;
