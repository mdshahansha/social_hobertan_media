 

# MERN Social Media APP  
*React / Express / MongoDB / Redux*

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)  [![forthebadge](http://forthebadge.com/images/badges/powered-by-electricity.svg)](http://forthebadge.com)

Final project of the Holberton school. This is a social network based on the MERN stack: MongoDb, Express, React, Node.js

### Prerequisites

Install an instance of a React project:
```bash
npx create-react-app simple-react-app
```

### Installation

Install the `package.json` dependencies in the root of the project and in `/client` with the following command:
```bash
npm install
```

### Backend Configuration:

1. Add your cluster information in `/config/db.js`.
2. Create the `.env` file in `/config/` with the following content:
   ```bash
   PORT=5000
   CLIENT_URL=http://localhost:3000
   DB_USER_PASS=id:password
   TOKEN_SECRET=990bf68e6adf1be5f1671bba3bec692056922454
   ```

### Frontend Configuration:

1. Create an `.env` file in the root of the frontend (`/client`) with the following content:
   ```bash
   REACT_APP_API_URL=http://localhost:5000/
   ```

### Getting Started

1. Start the backend server:
   ```bash
   npm start
   ```

2. Start the frontend:
   ```bash
   cd client
   npm start
   ```

### Built With

#### Backend:

- **MongoDB**: MongoDB is a schema-less NoSQL document database. It stores JSON documents and allows for flexibility in structure.
  
- **Mongoose**: Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It helps with schema validation and translating data between MongoDB and your app.

- **Nodemon**: A tool for automatically restarting the Node.js application when files change during development.

- **Bcrypt**: A library for hashing passwords securely.

- **Body-parser**: Middleware for parsing incoming request bodies, used to populate `req.body`.

- **Cookie-parser**: Middleware to parse cookies and make them accessible via `req.cookies`.

- **Dotenv**: A module that loads environment variables from a `.env` file into `process.env`, following The Twelve-Factor App methodology.

- **Express**: A minimalist web framework for Node.js to build APIs and handle HTTP requests.

- **Jsonwebtoken (JWT)**: A method for securely transmitting information between two parties as a JSON object.

- **Validator**: A library for string validation and sanitization.

#### Frontend:

- **React**: A JavaScript library for building user interfaces using a component-based architecture.

- **Redux**: A state management library to manage and centralize the application's state.

- **Dart SASS**: A stylesheet preprocessor to compile `.scss` files into CSS.

### Author

- **[Mohammad Shahansha](https://www.linkedin.com/in/mohammad-shahansha-042226193/)** _alias_ [@mdshahansha](https://github.com/mdshahansha/test01) on Github 
--- 
