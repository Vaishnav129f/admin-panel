// src/store/AuthContext.js
import React, { createContext, useReducer } from "react";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const AuthContext = createContext(initialState);

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const isAdmin = () => state.user?.role === "admin";

  return (
    <AuthContext.Provider value={{ state, dispatch, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
