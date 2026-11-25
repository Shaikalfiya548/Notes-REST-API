# Notes REST API

A simple RESTful API built using Node.js and Express.js to perform CRUD operations on notes.

## About the Project

The Notes REST API allows users to create, view, update, and delete notes using HTTP methods. This project demonstrates the fundamentals of backend development and REST API implementation.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- JSON
- Git and GitHub

## Features

- Create new notes
- Retrieve all notes
- Update existing notes
- Delete notes
- Handle HTTP requests and responses

## API Endpoints

Base URL: `http://localhost:3000`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/notes` | Retrieve all notes |
| POST | `/notes` | Create a new note |
| PUT | `/notes/1` | Update a note |
| DELETE | `/notes/2` | Delete a note |

## Example Request

POST `/notes`

```json
{
  "title": "My First Note",
  "content": "This is my first REST API note."
}
```

## Example Response

```json
{
  "title": "My First Note",
  "content": "This is my first REST API note."
}
```

## How to Run the Project

1. Clone the repository.
2. Open the project folder.
3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
node server.js
```

5. Open the API:

`http://localhost:3000/notes`

## Learning Outcomes

- Understanding REST API concepts
- Working with HTTP methods
- Building backend applications using Express.js
- Testing API endpoints
- Using GitHub for project management

## Author

Shaik Alfiya

GitHub: https://github.com/Shaikalfiya548
