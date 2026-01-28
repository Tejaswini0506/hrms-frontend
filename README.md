# HRMS Frontend (Angular)

Frontend application for a Human Resource Management System (HRMS) that enables role-based employee management through a clean and responsive user interface.

## Overview
This Angular application serves as the frontend for a full-stack HRMS platform, allowing administrators to manage employee data and users to view employee information through secure, role-based access.

## Tech Stack
- Angular
- TypeScript
- Bootstrap
- RESTful APIs
- Git & GitHub

## Features
- Role-based UI access (Admin / User)
- Employee Create, Read, Update, Delete (CRUD) operations
- Route protection using Angular Guards
- Responsive UI using Bootstrap
- Integration with Spring Boot backend APIs

## User Roles
- **Admin**
  - Add new employees
  - Edit employee details
  - Delete employee records
- **User**
  - View employee information

## Role Handling (Frontend)

This application demonstrates role-based behavior at the UI level using a selected role (Admin/User).

- The selected role is stored in the frontend state.
- UI actions such as **Add, Edit, and Delete** are enabled or disabled based on the selected role.
- This helps demonstrate how role-based access can be reflected in the user interface.

> Note: Role enforcement in the frontend is for demonstration purposes only.  
> Backend-level authorization using JWT and Spring Security will be implemented in a later phase.

## Screenshots
### Admin Role (Actions Enabled)
![Employee List - Admin](screenshots/employee-list-admin.png)

### User Role (Actions Disabled)
![Employee List - User](screenshots/employee-list-user.png)

### Add Employee
![Add Employee](screenshots/add-employee.png)

### Edit Employee
![Edit Employee](screenshots/edit-employee.png)


## Architecture
Angular UI
↓
Spring Boot REST APIs
↓
MySQL Database


## How to Run Locally
1. Clone the repository  
2. Install dependencies  
   ```bash
   npm install
   
3. Start the application
ng serve

4. Open in browser
http://localhost:4200

## Backend Repository
https://github.com/Tejaswini0506/hrms-backend
