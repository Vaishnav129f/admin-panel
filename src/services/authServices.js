// src/services/authService.js
import api from "./api";

const register = async (userData) => {
  const response = await api.post("/register", userData);
  return response.data;
};

const login = async (credentials) => {
  const response = await api.post("/login", credentials);
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("token");
};

export { register, login, logout };
