# User Authentication and Authorization with Bearer Token

Implementation of **user authentication and authorization** using **Bearer tokens** in a **Node.js** application with **Express.js, Mongoose, and JWT**. This application follows the **MVC architectural pattern** and includes comprehensive API documentation available via **Postman**.

## Features:

- User registration
- User login with JWT generation
- Route protection using Bearer tokens
- Structured using the MVC architecture
- Input validation and error handling
- MongoDB with Mongoose for schema-based modeling
- RESTful API design with clear endpoints
- API tested and documented via Postman
- Environment-based configuration

---

## Technologies Used:

- **Node.js** – JavaScript runtime environment
- **Express.js** – Web Application framework for Node.js
- **MongoDB** – NoSQL database for data storage
- **Mongoose** – ODM for MongoDB
- **Postman** – API testing and documentation
- **dotenv** – For managing environment variables
- **JWT** - For generating a Json Web Token(JWT) upon successful login.
- **bcrypt** - To hash(encrypt) & compare(decrypt) the password.

---

## API Endpoints:

| **Method** | **Endpoint**       | **Description**                   |
| ---------- | ------------------ | --------------------------------- |
| POST       | /api/auth/register | Register or Sign Up user          |
| POST       | /api/auth/login    | Login or Sign In user             |
| GET        | /api/auth/getuser  | Retrieves loggedin user's profile |

- RegisterUser: https://user-authentication-and-authorization-lsus.onrender.com/api/auth/register
- LoginUser: https://user-authentication-and-authorization-lsus.onrender.com/api/auth/login
- GetUser: https://user-authentication-and-authorization-lsus.onrender.com/api/auth/getuser

---

## Packages Installed:

- express
- cors
- dotenv
- mongoose
- nodemon
- bcrypt
- jsonwebtoken

---

## Error Handling & Validation:

- 401 Invalid Credentials ---> When user enters invalid password

- 404 Not Found --–> When user not found

- 500 Internal Server Error --–> For server-side issues.

- Validations are included to ensure data integrity (e.g., required fields, data types).

---

## Postman API Documentation:

- API tested and documented via Postman

- Documentation link: https://documenter.getpostman.com/view/44995020/2sB2qdezDq

---

## 🙋‍♂️ Author & Contact

- Developed by: Vignesh R
- GitHub: @VigneshRav
- Email: vignesh212000@gmail.com

---
