# Assignment - Chaintech Netwrok

# Task Management API

This is a simple Task Management API that allows users to create, view, edit, complete, and delete tasks. It provides endpoints to interact with the tasks, making it easy to manage your to-do list.

## Table of Contents

- [Features](#features)
- [API Endpoints](#api-endpoints)
  - [Create a Task](#create-a-task)
  - [Get All Tasks](#get-all-tasks)
  - [Mark Task as Completed](#mark-task-as-completed)
  - [Edit Task Details](#edit-task-details)
  - [Delete a Task](#delete-a-task)
- [Technologies Used](#technologies-used)
- [How to Run](#how-to-run)

## Features

- **Create Tasks**: Create a new task with a title and description.
- **View Tasks**: Retrieve a list of all tasks.
- **Update Tasks**: Edit the details of existing tasks.
- **Mark Tasks as Completed**: Mark tasks as completed.
- **Delete Tasks**: Delete tasks from the list.

## API Endpoints

### 1. Create a Task

- **Endpoint**: `POST /api/v1/task`
- **Description**: Allows users to create a new task with a title and description.

**Request Body**:

```json
{
  "title": "Task Title",
  "description": "Detailed description of the task"
}
```

### 2. Get All Tasks

- **Endpoint**: `GET /api/v1/task/bulk`
- **Description**: Retrieves a list of all tasks.

**Response**:

```json
[
  {
    "id": 1,
    "title": "Task Title",
    "description": "Task Description",
    "status": "Pending"
  },
  {
    "id": 2,
    "title": "Another Task",
    "description": "Another Description",
    "status": "In Progress"
  }
]
```

### 3. Mark Task as Completed

- **Endpoint**: `PATCH /api/v1/task/completed`
- **Description**: Marks a task as completed.

**Request Body**:

```json
{
  "task_id": 1
}
```

### 4. Edit Task Details

- **Endpoint**: `PUT /api/v1/task`
- **Description**: Allows users to edit the details (title or description) of an existing task.

**Request Body**:

```json
{
  "task_id": 1,
  "title": "Updated Task Title",
  "description": "Updated Task Description"
}
```

### 5. Delete a Task

- **Endpoint**: `DELETE /api/v1/task`
- **Description**: Deletes a task by its ID.

**Request Body**:

```json
{
  "task_id": 1
}
```

## Persistence:

- Implement data persistence simple database like MySQL/MongoDB.
- Tasks should be stored and retrieved from the database.

## Validation:

- Implement validation to ensure that task titles are not empty.
- Ensure that users can't mark a task as complete if it's already marked as such.
- Handle errors gracefully and provide meaningful error messages.

## Documentation:

- Include clear instructions on how to use your To-Do List application in the README.md file.
- Provide a brief explanation of the code structure and key decisions you made.

## Bonus (Optional)

- Implement due dates for tasks.
- Add the ability to categorize tasks.
- Implement unit tests for your application.

```

```

```

```

```

```

```

```
