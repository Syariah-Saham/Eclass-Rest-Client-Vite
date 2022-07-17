import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart";
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
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
