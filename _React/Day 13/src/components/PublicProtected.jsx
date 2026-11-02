import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

const PublicProtected = ({ children }) => {
  const { user } = useAuth();
  if (user) {
    return <Navigate to={"/"} />;
  }
  return children;
};

export default PublicProtected;
