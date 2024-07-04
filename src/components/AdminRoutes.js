// src/components/AdminRoute.js
import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import AuthContext from "../store/AuthContext";

const AdminRoute = ({ component: Component, ...rest }) => {
  const { state, isAdmin } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        state.isAuthenticated && isAdmin() ? (
          <Component {...props} />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  );
};

export default AdminRoute;
