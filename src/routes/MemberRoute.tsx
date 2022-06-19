import React, { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const MemberRoute: React.FC<PropsWithChildren> = (props) => {
  const authState = useAppSelector((state) => state.auth);

  if (authState.role !== "member") {
    return <Navigate to="/login" />;
  }
  return <>{props.children}</>;
};

export default MemberRoute;
