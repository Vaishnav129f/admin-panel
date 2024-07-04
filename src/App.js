// src/App.js
import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";
import ProtectedRoute from "./components/ProtectedRoute";

// import AdminRoute from "./components/AdminRoute";
// import AdminRoute from "./components/AdminRoute";

import { AuthProvider } from "./store/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Hello</div>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={<ProtectedRoute element={AdminPanel} />}
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
