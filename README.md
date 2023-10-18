# Student Management App

A full-stack web application for managing student information, built with React, Laravel, and a SQL database.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
  - [Frontend (React)](#frontend-react)
  - [Backend (Laravel)](#backend-laravel)
- [Usage](#usage)
- [Contributing](#contributing)

## Overview
The Student Management App is designed to help educational institutions manage and track student information efficiently. It consists of two main components: the frontend, built with React, and the backend, developed with Laravel. This README provides information on how to set up and run the application.

## Features
- Add, edit, and delete student records.
- View a list of all students and their details.
- Search and filter students based on various criteria.
- User authentication and access control.
- Secure and efficient storage of student data in a SQL database.

## Installation
### Frontend (React)
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. The React app should now be running on `http://localhost:3000`. You can access it in your web browser.

### Backend (Laravel)
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install PHP dependencies using Composer:
   ```bash
   composer install
   ```

3. Create a new `.env` file:
   ```bash
   cp .env.example .env
   ```

4. Generate an application key:
   ```bash
   php artisan key:generate
   ```

5. Set up your database connection in the `.env` file, including the database name, username, and password. Example:
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=student_management
   DB_USERNAME=root
   DB_PASSWORD=
   ```
   
6. Run database migrations to create tables:
   ```bash
   php artisan migrate
   ```
   
7. Seed the database with fake user data:
   ```bash
   php artisan tinker
   ```
   ```php
   User::factory()->count(50)->create()
   ```

8. Start the Laravel development server:
   ```bash
   php artisan serve
   ```

9. The Laravel API should now be accessible at `http://localhost:8000`.

## Usage
1. Access the frontend application at `http://localhost:3000` in your web browser.
2. Use the app to manage student records, search for students, and more.

## Contributing
Contributions are welcome! If you want to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Create a pull request to the main repository.


