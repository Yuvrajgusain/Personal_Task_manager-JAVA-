# Personal Task Manager

A full-stack task management application built using **Java, Hibernate, JAX-RS (REST API), MySQL, HTML, CSS, and JavaScript**. The application allows users to create, view, update, delete, and search tasks through a clean and responsive web interface.

## Features

* Create new tasks
* View all tasks
* Update existing tasks
* Delete tasks
* Search tasks by title
* Set task status (Pending, In Progress, Completed)
* Set task priority (Low, Medium, High)
* RESTful API architecture
* Database persistence using Hibernate ORM
* Responsive and modern user interface

## Tech Stack

### Backend

* Java
* Hibernate ORM
* JAX-RS (Jersey)
* Maven
* Apache Tomcat

### Frontend

* HTML5
* CSS3
* JavaScript (Fetch API)

### Database

* MySQL

## Project Structure

```text
src/main/java
│
├── Task.java                // Entity class
├── TaskDatabase.java        // Database operations
├── TaskResource.java        // REST API endpoints
├── TaskApplication.java     // JAX-RS configuration
└── hibernateUtil.java       // Hibernate SessionFactory configuration
```

## REST API Endpoints

| Method | Endpoint                  | Description             |
| ------ | ------------------------- | ----------------------- |
| GET    | /api/tasks                | Get all tasks           |
| GET    | /api/tasks/{id}           | Get task by ID          |
| POST   | /api/tasks                | Create a new task       |
| PUT    | /api/tasks/{id}           | Update an existing task |
| DELETE | /api/tasks/{id}           | Delete a task           |
| GET    | /api/tasks/search/{title} | Search tasks by title   |

## Database Schema

```sql
CREATE TABLE tasks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    description VARCHAR(500),
    status VARCHAR(50),
    priority VARCHAR(50)
);
```

## How to Run

### Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/PersonalTaskManager.git
```

### Configure Database

Create a MySQL database and update the database credentials inside:

```xml
hibernate.cfg.xml
```

```xml
<property name="hibernate.connection.url">
jdbc:mysql://localhost:3306/personal
</property>

<property name="hibernate.connection.username">
root
</property>

<property name="hibernate.connection.password">
your_password
</property>
```

### Build and Run

```bash
mvn clean install
```

Deploy the generated WAR file to Apache Tomcat.

### Access Application

```text
http://localhost:8084/PersonalTaskManager_war_exploded/
```

## Learning Outcomes

This project demonstrates:

* REST API development using JAX-RS
* Hibernate ORM integration
* CRUD operations with MySQL
* Frontend and backend integration using Fetch API
* Maven project management
* Web application deployment on Apache Tomcat

## Future Enhancements

* User Authentication and Authorization
* JWT-based Security
* Task Categories and Tags
* Due Dates and Reminders
* Pagination and Sorting
* Dashboard Analytics
* AI-powered Task Recommendations

## Author

Yuvraj Gusain

Aspiring Java Backend Developer passionate about Java, Spring Boot, Hibernate, REST APIs, and AI-powered applications.
