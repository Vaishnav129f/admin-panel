// src/components/Logout.js
import React, { useContext } from "react";
import AuthContext from "../store/AuthContext";

const Logout = () => {
  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
