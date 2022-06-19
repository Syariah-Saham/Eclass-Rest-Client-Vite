import React, { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const AuthRoute: React.FC<PropsWithChildren> = (props) => {
  const authState = useAppSelector((state) => state.auth);

  if (authState.status) {
    return <Navigate to={`/${authState.role}/dashboard`} />;
  }
  return <>{props.children}</>;
};

export default AuthRoute;
