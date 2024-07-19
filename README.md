

# recruit_CRM Technical-Assignment
This project implements a JWT authentication system using Node.js, including a main service for user and candidate management, and a public API microservice.

## Setup

### 1. Clone the Repository:

```bash
git clone https://github.com/AKSHAYRAM2003/recruit_CRM1.git
```
```bash
cd recruit-crm-assignment
```

### 2. Install Dependencies:

```bash
# For the main service
cd main-service
npm install
```
```bash
# For the public API
cd ../public-API
npm install
```

### 3. Set Up Environment Variables:

Create a `.env` file in both the `main-service` and `public-API` directories with the following content:

```bash
MONGODB_URI=mongodb://localhost:27017/recruit_crm1
JWT_SECRET=your_jwt_secret_here
API_KEY = past your_api_key
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

Detailed API documentation can be found in the [API_Documentation](./project%20root/API_DOCUMENTATION.json) file.

## Testing

Use Postman to test the API endpoints as described in the API documentation.

## Database Dump

A database dump is provided in the `database_dump` directory. To restore it:

```bash
mongorestore --db recruit_crm1 database_dump/recruit_crm1
```
Detailed `DBuser` documentation can be found in the [Database_User](./project%20root/Db_dump-user.json) file.
Detailed `DBcandidate` documentation can be found in the [Database_Candidate](./project%20root/Db_dump-user.json) file.


### Example Structure:
If your repository structure looks like this:
```bash
recruit-crm-assignment/
|
|--Project-root/
       ├── main-service/
       ├── public-API/
       ├── database_dump/
       ├── API_DOCUMENTATION.json
       └── README.md
```

## Screenshot
![Database image](./project%20root/Assets/Database%20structure.png)

## License

This project is licensed under the MIT License.



