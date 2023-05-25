# E-Commerce Backend

This is an enhanced version of the E-commerce backend application built with Node.js, Express.js, and Sequelize ORM to interact with a MySQL database. This application serves as an API that can be used to manage a simple E-commerce website.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Changes Made](#changes-made)

## Installation

1. Clone this GitHub repository
2. Install all dependent npm packages
3. Create a .env file and include your MySQL user/password information. See `.env.EXAMPLE` in the repository.
4. Create the database using the `schema.sql` file in the MySQL shell.
5. Seed the database with example data
6. Start the application with Express.js

## Usage

The application allows you to view, add, update, and delete categories, products, and tags.

### Endpoints

1. Categories
- GET, POST, PUT, DELETE `/api/categories`
2. Products
- GET, POST, PUT, DELETE `/api/products`
3. Tags
- GET, POST, PUT, DELETE `/api/tags`

## Changes Made

In this enhanced version of the E-commerce backend, various improvements have been made to make it more robust and efficient:

1. Refactored routes: The routes have been refactored for increased clarity and efficiency.
2. Eager loading: Implemented eager loading to efficiently retrieve associated data.
3. Improved error handling: Enhanced error handling capabilities for easier debugging and error resolution.
