# Post Management Website

## Overview
This is a simple web application built using Node.js and Express.js that provides RESTful APIs for managing posts. Users can add, edit, delete, and view posts in detail. The app utilizes a basic CRUD (Create, Read, Update, Delete) structure.

## Features
- Add new posts
- Edit existing posts
- Delete posts
- View post details
- RESTful API structure for efficient communication

## Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: json files
- **Middleware**: Body-parser
- **API Testing**: Postman or cURL (for testing the APIs)

## API Endpoints

### Create a Post
- **URL**: `/posts/new`
- **Method**: `POST`
- **Description**: Adds a new post to the database.
- **Request Body**:
  ```json
  {
    "title": "Post Title",
    "content": "Post Content"
  }
