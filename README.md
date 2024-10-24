Notes App (React, Node.js, Express.js, MongoDB)

This project is a full stack notes application with user authentication, featuring a React frontend and a Node.js backend (Express.js) with MongoDB as the database. The app is structured into two services: frontend and backend.
Features:

    Create and manage notes.
    User authentication system.

How to Run the Project:

    Clone the repository.

    Navigate to the backend/api folder.

    Add a .env file with the following content: MONGO_URL="<your-mongodb-url>"

In the root directory, run:

docker compose up --build -d

Access the app at http://localhost:80.
