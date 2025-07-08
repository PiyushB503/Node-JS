# Node-JS
## BOOK-MANAGEMENT-SYSTEM
This project implements a Book Management System backend using Node.js and Express. It features middleware for logging incoming requests and handling errors, along with RESTful API routes for performing CRUD operations on book data stored in a data.json file.
## RESTFUL API
A RESTful API is an architectural style that utilizes HTTP methods to manage resources. In this project, books are treated as resources, and the API adheres to REST principles:

  ### GET: Fetch book data.
  ### POST: Create a new book entry.
  ### PUT: Update details of an existing book.
  ### DELETE: Remove a book from the system.
## MIDDLEWARE
Middleware functions in Express are functions that have access to the request, response, and the next function in the request-response cycle. These functions are used for:

### Logging request information.
### Managing and handling errors.
### Preprocessing request data before it reaches the endpoint.
## TECHNOLOGY USED
Node and Express
