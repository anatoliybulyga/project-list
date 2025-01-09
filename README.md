# Project List

This project is a simple React-based application that allows you to manage and edit a list of projects, including their names, descriptions, start and end dates, and project manager details. It also includes a sidebar where users can view their favorite projects.

# Project Setup Guide

## Prerequisites

Before running the project, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes with Node.js)

## Overview

This project uses a JSON server to mock a backend API and React for the frontend. The instructions below detail how to set up and run both the backend (JSON server) and the frontend.

---

## Running the JSON Server

### 1. Install Dependencies

Navigate to the project directory and install the necessary dependencies by running:

```bash
npm install
```

### 2. Configure the JSON Server

Make sure you have a `db.json` file in the project root. This file serves as the mock database for the JSON server. Example content for `db.json`:

```json
{
  "projects": [
    {
      "id": "project_a",
      "name": "Project A",
      "description": "Description",
      "startDate": "2023-01-01",
      "endDate": "2023-12-31",
      "manager": "John Doe"
    }
  ]
}
```

### 3. Start the JSON Server

Run the following command to start the JSON server:

```bash
npm run start-json-server
```

By default, the server will run on `http://localhost:3001`. You can access the mock API endpoints such as:

- `http://localhost:3001/projects`

## Running the Frontend

### 1. Start the React App

In a separate terminal, run the following command to start the React frontend:

```bash
npm start
```

The React app will run on `http://localhost:3000` by default. If the port is already in use, it will prompt to use the next available port.

### 2. Update API URL

Ensure the frontend is configured to communicate with the JSON server. Check the `API_URL` in your environment configuration (e.g., `.env` file):

```env
REACT_APP_API_URL=http://localhost:3001
```

If you are using a different port for the JSON server, update this URL accordingly.

---

## Available npm Scripts

- **`npm run start`**: Starts a local development server using webpack serve.
- **`npm run start-json-server`**: Starts the JSON server to mock a REST API.
- **`npm run format`**: Formats the codebase using Prettier. Ensures consistent code style across the project.
- **`npm run build`**: Compiles the project using Webpack based on the webpack.config.js file.
- **`npm run dev`**: Runs Webpack in watch mode to recompile the code on changes, enabling efficient development.

---
