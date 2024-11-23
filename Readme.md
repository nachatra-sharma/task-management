# Assignment - ChainTech Network NodeJS

## Task Management

A **Task Management API** built using **Node.js** and **MongoDB** to manage tasks and categories. It provides endpoints for CRUD operations on tasks and categories, allowing users to organize tasks into categories, mark tasks as complete, and more.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
  - [Task Endpoints](#task-endpoints)
  - [Category Endpoints](#category-endpoints)

## Features

- Create, read, update, and delete tasks.
- Organize tasks into categories.
- Mark tasks as completed.
- Populate task data with associated categories.
- Robust validation with informative error responses.

## Technologies Used

- **Node.js**: Backend runtime.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: Database for storing tasks and categories.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB.
- **Zod**: Schema-based validation.
- **JavaScript (ES6+)**: Programming language.

## Prerequisites

Before running this project, ensure you have:

- Node.js (v14 or higher)
- MongoDB (running locally or via a cloud provider like MongoDB Atlas)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nachatra-sharma/task-management
   cd task-management
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set-up environment variables:

   - Create a .env file in the root directory and set the following variables:

   ```bash
     PORT=3000
     Db_URL=mongodb://localhost:27017/task_management
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Task Endpoints

| Method | Endpoint          | Description                                |
| ------ | ----------------- | ------------------------------------------ |
| GET    | `/task`           | Fetch all tasks with populated categories. |
| POST   | `/task`           | Create a new task.                         |
| DELETE | `/task`           | Delete a task by ID.                       |
| PATCH  | `/task/completed` | Mark a task as completed by ID.            |
| PATCH  | `/task`           | Update a task's details by ID.             |

### Category Endpoints

| Method | Endpoint      | Description                               |
| ------ | ------------- | ----------------------------------------- |
| GET    | `/categories` | Fetch all categories with populated data. |
| POST   | `/categories` | Create a new category.                    |
| DELETE | `/categories` | Delete a category by ID.                  |
| PATCH  | `/categories` | Update a category's title by ID.          |
