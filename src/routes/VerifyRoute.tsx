import React, { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const VerifyRoute: React.FC<PropsWithChildren> = (props) => {
  const authState = useAppSelector((state) => state.auth);

  if (!authState.status) {
    return <Navigate to="/login" />;
  }

  if (authState.user?.email_verified_at) {
    return <Navigate to={`/${authState.role}/dashboard`} />;
  }

  return <>{props.children}</>;
};

export default VerifyRoute;
