// src/pages/AdminPanel.js

import React, { useEffect, useState } from "react";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../services/userServices";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    const newUser = await createUser(formData);
    setUsers([...users, newUser]);
  };

  const handleUpdateUser = async (id) => {
    const updatedUser = await updateUser(id, formData);
    setUsers(users.map((user) => (user._id === id ? updatedUser : user)));
  };

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((user) => user._id !== id));
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <form onSubmit={handleCreateUser}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Create User</button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.firstName} {user.lastName} ({user.email})
            <button onClick={() => handleUpdateUser(user._id)}>Edit</button>
            <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
