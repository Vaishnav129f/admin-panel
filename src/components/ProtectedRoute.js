import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../store/AuthContext";

const ProtectedRoute = ({ element }) => {
  const { state } = useContext(AuthContext);

  if (!state.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return element;
};

export default ProtectedRoute;
