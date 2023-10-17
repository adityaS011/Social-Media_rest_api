# Social-Media_rest_api
Restful Api's for a social media blog app
# Blog App REST API

A RESTful API for a simple blog application using Node.js, Express, and MongoDB.

## Features

- Create, read, update, and delete blog posts.
- Secure authentication and authorization.
- MongoDB for data storage.
- RESTful API design.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.
- MongoDB database connection.

### Installation
    -git clone https://github.com/adityaS011/Social-Media_rest_api
    -cd Social-Media_rest_api
    -npm install
    -npm start

###API Endpoints
Create a new blog post:

GET /api/blog
Get a list of all blog posts:

GET /api/blog/user/:id
Get all blogs for a specific user:

POST /api/blog/add/
add a blog for a user:

POST /api/user/sigup/
add user to the database:

POST /api/user/login/
Login the user:

PUT /api/blog/update/
update a blog post:

DELETE /api/blog/delete/:id
delete the blog:

Implement user registration and login as needed.

License
This project is licensed under the MIT License - see the LICENSE file for details.
