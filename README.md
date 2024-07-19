# recruit_CRM1
recruit_CRM - Assesment


# Recruit CRM Technical Assignment

This project implements a JWT authentication system using Node.js, including a main service for user and candidate management, and a public API microservice.

## Setup

1. Clone the repository:
git clone git@github.com:AKSHAYRAM2003/recruit_CRM1.git
cd recruit-crm-assignment

2. Install dependencies:
cd main-service
npm install
cd ../public-API
npm install

3. Set up environment variables:
Create a .env file in both the main-service and public-API directories with the following content:
MONGODB_URI=mongodb://localhost:27017/recruit_crm1
JWT_SECRET=your_jwt_secret_here
API_KEY=1056cdfacff9f69177e8b7851e9dac7fef71be1a6ce3306b708ad8cd5ef043bd
PORT=3000

4. Start MongoDB:
Ensure MongoDB is running on your system.

5. Start the services:
cd main-service
node server.js

In a new terminal:
cd public-API
node server.js

## API Documentation

Detailed API documentation can be found in the [API_DOCUMENTATION.md](API_DOCUMENTATION.md) file.

## Testing

Use Postman to test the API endpoints as described in the API documentation.

## Database Dump

A database dump is provided in the `database_dump` directory. To restore it:
mongorestore --db recruit_crm1 database_dump/recruit_crm1

## License

This project is licensed under the MIT License.