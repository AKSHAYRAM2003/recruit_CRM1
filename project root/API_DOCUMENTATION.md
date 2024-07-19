# API Documentation

## Main Service

Base URL: http://localhost:3000/api

### User Registration

- **URL**: `/users/register`
- **Method**: POST
- **Headers**: Content-Type: application/json
- **Body**:
  ```json
  {
    "first_name": "John",
    "last_name": "Doe",
    "email": "john@example.com",
    "password": "password123"
  }

  Success Response:

Code: 201
Content: { "message": "User registered successfully", "token": "<JWT_TOKEN>" }



User Login

URL: /users/login
Method: POST
Headers: Content-Type: application/json
Body:
{
  "email": "john@example.com",
  "password": "password123"
}

Success Response:

Code: 200
Content: { "message": "Login successful", "token": "<JWT_TOKEN>" }



Protected Route

URL: /users/protected
Method: GET
Headers:

Content-Type: application/json
Authorization: Bearer <JWT_TOKEN>


Success Response:

Code: 200
Content: { "message": "Access to protected data successful", "user": { ... } }



Add Candidate

URL: /candidates
Method: POST
Headers:

Content-Type: application/json
Authorization: Bearer <JWT_TOKEN>


Body:
{
  "first_name": "Jane",
  "last_name": "Smith",
  "email": "jane@example.com"
}

Success Response:

Code: 201
Content: { "message": "Candidate added successfully", "candidate": { ... } }



Get Candidates

URL: /candidates
Method: GET
Headers:

Authorization: Bearer <JWT_TOKEN>


Success Response:

Code: 200
Content: { "candidates": [ ... ] }



Public API
Base URL: http://localhost:3000/api/public
Get User Profile

URL: /profile
Method: POST
Headers:

X-API-Key: 1056cdfacff9f69177e8b7851e9dac7fef71be1a6ce3306b708ad8cd5ef043bd


Success Response:

Code: 200
Content: { "first_name": "...", "last_name": "...", "email": "..." }



Get Candidates

URL: /candidate
Method: GET
Headers:

X-API-Key: 1056cdfacff9f69177e8b7851e9dac7fef71be1a6ce3306b708ad8cd5ef043bd


Success Response:

Code: 200
Content: { "candidates": [ ... ] }

Testing with Postman

1.Open Postman
2.Create a new request for each endpoint
3.Set the appropriate method (GET/POST)
4.Enter the full URL (including base URL)
5.Set headers as specified for each endpoint
6.For POST requests, enter the required JSON body
7.For protected routes, use the JWT token received from login/register in the Authorization header
8.For public API routes, use the provided API key in the X-API-Key header
9.Click "Send" to make the request
10.Check the response for the expected status code and content

Note:-
Remember to start both the main service and public API service before testing.