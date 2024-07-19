Sure, here's the complete content for your README file, formatted and ready to be used:

```markdown
# Recruit CRM Technical Assignment

This project implements a JWT authentication system using Node.js, including a main service for user and candidate management, and a public API microservice.

## Setup

### 1. Clone the Repository:
```bash
git clone git@github.com:AKSHAYRAM2003/recruit_CRM1.git
cd recruit-crm-assignment
```

### 2. Install Dependencies:
```bash
# For the main service
cd main-service
npm install

# For the public API
cd ../public-API
npm install
```

### 3. Set Up Environment Variables:
Create a `.env` file in both the `main-service` and `public-API` directories with the following content:
```bash
MONGODB_URI=mongodb://localhost:27017/recruit_crm1
JWT_SECRET=your_jwt_secret_here
API_KEY=1056cdfacff9f69177e8b7851e9dac7fef71be1a6ce3306b708ad8cd5ef043bd
PORT=3000
```

### 4. Start MongoDB:
Ensure MongoDB is running on your system.

### 5. Start the Services:
In one terminal:
```bash
cd main-service
node server.js
```

In a new terminal:
```bash
cd public-API
node server.js
```

## API Documentation

Detailed API documentation can be found in the [API_DOCUMENTATION.md](API_DOCUMENTATION.md) file.

## Testing

Use Postman to test the API endpoints as described in the API documentation.

## Database Dump

A database dump is provided in the `database_dump` directory. To restore it:
```bash
mongorestore --db recruit_crm1 database_dump/recruit_crm1
```

## License

This project is licensed under the MIT License.
```

This is a single file containing all the content you provided, organized and formatted for clarity. You can save this as your README.md file.