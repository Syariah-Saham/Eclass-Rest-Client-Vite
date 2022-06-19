import React, { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const AdminRoute: React.FC<PropsWithChildren> = (props) => {
  const authState = useAppSelector((state) => state.auth);

  if (authState.role !== "admin") {
    return <Navigate to="/login" />;
  }
  return <>{props.children}</>;
};

export default AdminRoute;
