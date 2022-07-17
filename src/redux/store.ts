import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import coursesReducer from "./reducers/courses";
import dashboardReducer from "./reducers/dashboard";
import snackbarReducer from "./reducers/snackbar";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardReducer,
    snackbar: snackbarReducer,
    courses: coursesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
