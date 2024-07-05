# Project Setup

# 1. Clone the Repository

git clone <your-repo-url>
cd <your-repo-name>

# 2. Install Dependencies

Navigate to both the frontend and backend directories and install the necessary dependencies.

# Frontend:

cd frontend
npm install

# Backend:

cd backend
npm install

# 3. Set Up MongoDB

Create a MongoDB database using MongoDB Atlas or a local MongoDB instance.
Create a .env file in the backend directory and add the following:
makefile
Copy code
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
PORT=5000

# 4. Run the Backend Server

cd backend
node server.js

# 5. Run the Frontend Server

cd frontend
npm start

# Functionality Overview

Register and Login
Navigate to http://localhost:3000/register to register a new user.
After registration, navigate to http://localhost:3000/login to log in.
User Dashboard
Regular users will be redirected to the UserPanel to view user details.
Admin Dashboard
Admin users will be redirected to the AdminPanel to manage users (CRUD operations).

## This part is not implemented due to the error .

Admins will see the AdminPanel with CRUD functionalities, while regular users will see the UserPanel with read-only access.

So this can be implemented later.
