# TodoList API

This is a simple TodoList API built using Express.js and PostgreSQL. The API is hosted on AWS RDS and deployed using Render. It allows you to manage your todo activities, including inserting new activities, updating them, deleting activities, and viewing the list of activities.

## API Endpoints

- **View All Activities**: Get a list of all todo activities.
  - Endpoint: [GET /todos](https://mytodolist-96gk.onrender.com/todos)

- **View a Specific Activity**: Get details of a specific activity by ID.
  - Endpoint: [GET /todos/:id](https://mytodolist-96gk.onrender.com/todos/1)
  - Example: To view activity with ID 1, use the above endpoint with `/1`.

- **Insert New Activity**: Add a new todo activity.
  - Endpoint: [POST /todos](https://mytodolist-96gk.onrender.com/todos)
  - Request Body: JSON with `description` field.

- **Update Activity**: Update an existing todo activity by ID.
  - Endpoint: [PUT /todos/:id](https://mytodolist-96gk.onrender.com/todos/1)
  - Request Body: JSON with `description` field.

- **Delete Activity**: Delete a todo activity by ID.
  - Endpoint: [DELETE /todos/:id](https://mytodolist-96gk.onrender.com/todos/1)

## Technologies Used

- **Express.js**: Used as the web application framework.
- **PostgreSQL**: Used as the database to store todo activities.
- **AWS RDS**: The database is hosted on AWS RDS for data storage.
- **Render**: The API is deployed and hosted on Render.


## Usage

You can use the provided API endpoints to manage your todo activities. Simply make HTTP requests to the respective endpoints using tools like `curl`, `fetch`, or Postman.

## Getting Started

To set up and run this API locally, follow these steps:

1. Clone this repository to your local machine.

   ```bash
   git clone https://github.com/ishazimba/to-do-list-api.git
   ```

2. Navigate to the project directory.

   ```bash
   cd to-dolist-api
   ```

3. Install project dependencies.

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory of the project and insert your AWS RDS configuration details:

   ```env
   # AWS RDS Database Configuration
   DB_USER=your-db-user
   DB_PASSWORD=your-db-password
   HOST=your-db-host
   PORT=5432
   DATABASE=your-db-name
   ```

   Replace `your-db-user`, `your-db-password`, `your-db-host`, and `your-db-name` with your actual AWS RDS database credentials.

5. Start the Express.js server.

   ```bash
   npm start
   ```

6. Your API will be running locally, and you can access it using the provided API endpoints.

Feel free to explore and enhance this TodoList API to suit your needs!
```

Make sure to replace `your-username/to-dolist-api` with the actual GitHub repository URL for your project. This updated section guides users on how to set up the development environment and configure the `.env` file with AWS RDS credentials.

