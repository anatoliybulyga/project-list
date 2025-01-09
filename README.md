# Project List

This project is a simple React-based application that allows you to manage and edit a list of projects, including their names, descriptions, start and end dates, and project manager details. It also includes a sidebar where users can view their favorite projects.

## Features

- **Project List**: View all projects with their details (ID, name, start date, end date, and project manager).
- **Edit Project**: Edit project details such as name, description, start date, and end date.
- **Favorites**: Mark projects as "favorites" and view them in the sidebar.
- **Responsive**: The application is designed to be responsive and work well across different devices.

## Prerequisites

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (preferably the latest LTS version)
- [npm](https://npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Setup

### 1. Clone the Repository

Clone the repository to your local machine using Git:

```bash
git clone https://github.com/anatoliybulyga/project-list.git
```

### 2. Navigate to the Project Directory

```bash
cd project-list
```

### 3. Install Dependencies

Install the required dependencies using either npm or Yarn.

If you're using npm:

```bash
npm install
```

If you're using Yarn:

```bash
yarn install
```

### 4. Start the Development Server

Once the dependencies are installed, start the development server.

If you're using npm build and run the project:

```bash
npm run dev:server
```

If you're using Yarn:

```bash
yarn dev:server
```

The application will be available at http://localhost:3000.

## Usage

- **View Projects:** Once the app is running, you can view a list of projects along with their details.
- **Edit Project:** Click the Edit button on a project to edit its details.
- **Favorite Projects:** You can mark projects as favorites, and they will appear in the sidebar under "Favorite Projects."
- **Add New Projects:** Add new projects and manage the project list easily.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **React Router:** For routing and navigating between pages (Project List and Edit Project).
- **Redux Toolkit:** For state management.
- **Ant Design:** UI components for styling and layout.
- **Moment.js:** Date manipulation for start and end dates.
