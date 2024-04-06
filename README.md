# Task Management System
A simple RESTful API for managing tasks. Users can register, log in, create, update, delete tasks, and view their tasks. Built with Node.js, Express, and MongoDB.

## Installations And Guidelines
- git clone https://github.com/sumit1921184/TaskManagementSystem.git
- npm install
- Set up MongoDB and configure the connection string in config/db.js.
- Generate JWT secret key and update it in the authentication middleware (middleware/auth.middleware.js).
- npm run server

## API Endpoints

### Users

#### POST /user/register

- *Description:* Register a new user.

- *Request Body:*
  ```json
  {
   "username": "string",
   "email": "string",
   "password": "string"
  }

#### POST /user/login

- **Description:** Login with user credentials.

- **Request Body:**
  ```json
  {
    "email": "string",
    "password": "string"
  }

 ### Tasks

 #### POST /tasks

- **Description:** Create a new task.

- **Request Headers:**
  - Authorization: Bearer <token>

- **Request Body:**
  ```json
  {
    "title": "string",
    "description": "string",
    "priority": "string",
    "status":"string",
  }

#### GET /tasks

- **Description:** Get all tasks for the authenticated user.

- **Request Headers:**
  - Authorization: Bearer <token>

- **Responses:**
  - 200 OK
    ```json
    [
      {
        "_id": "string",
        "title": "string",
        "description": "string",
        "priority": "string",
        "status": "string",
        "userId": "string",
        "createdAt": "date"
      },
      
    ]
    ```

  - 400 Bad Request
    ```json
    {
      "msg": "Error message"
    }
    ```

#### GET /task/:id

- **Description:** Get a particular task by ID for the authenticated user.

- **Request Headers:**
  - Authorization: Bearer <token>

- **Request Parameters:**
  - id: Task ID

- **Responses:**
  - 200 OK
    ```json
    {
      "_id": "string",
      "title": "string",
      "description": "string",
      "priority": "string",
      "status": "string",
      "userId": "string",
    }
    ```

  - 400 Bad Request
    ```json
    {
      "msg": "Error message"
    }
    ```
#### PATCH /task/:id

- **Description:** Update a particular task by ID for the authenticated user.

- **Request Headers:**
  - Authorization: Bearer <token>

- **Request Parameters:**
  - id: Task ID

- **Request Body:**
  ```json
  {
    "title": "string",
    "description": "string",
    "priority": "string",
    "status": "string"
  }

- **Responses:**
  - 200 OK
    ```json
    {
        "msg": "Tasks has been updated"
    }
    ```

  - 400 Bad Request
    ```json
    {
      "msg": "Error message"
    }
    ```

#### DELETE /tasks/:id

- **Description:** Delete a particular task by ID for the authenticated user.

- **Request Headers:**
  - Authorization: Bearer <token>

- **Request Parameters:**
  - id: Task ID

- **Responses:**
  - 200 OK
    ```json
    {
      "msg": "Task has been deleted"
    }
    ```

  - 400 Bad Request
    ```json
    {
      "msg": "Error message"
    }
    
    ```







