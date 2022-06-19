import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import dashboardReducer from "./reducers/dashboard";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
